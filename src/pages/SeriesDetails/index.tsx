import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import {
  fetchSeriesDetails,
  fetchUserWatchedEpisodes,
  updateUserEpisodeStatus,
  type SeriesDetails as SeriesDetailsType,
  type WatchedEpisode,
} from '@/api/series';
import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { SkeletonBackdrop } from '@/components/shared/skeletons/SkeletonBackdrop';
import { SeriesBackdrop } from '@/pages/SeriesDetails/components/SeriesBackdrop';
import { SeriesSeasons } from '@/pages/SeriesDetails/components/SeriesSeasons';

export const SeriesDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [series, setSeries] = useState<SeriesDetailsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [watchedEpisodes, setWatchedEpisodes] = useState<WatchedEpisode[]>([]);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const [seriesData, watchedData] = await Promise.all([
          fetchSeriesDetails(id),
          fetchUserWatchedEpisodes(id),
        ]);
        setSeries(seriesData);
        setWatchedEpisodes(watchedData);
      } catch {
        setError('Failed to load series details');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  const handleToggleWatched = async (
    episodeId: number,
    seasonNumber: number,
    currentlyWatched: boolean
  ) => {
    setWatchedEpisodes(prev =>
      currentlyWatched
        ? prev.filter(ep => ep.episodeId !== episodeId)
        : [...prev, { episodeId, seasonNumber }]
    );

    try {
      await updateUserEpisodeStatus(episodeId);
    } catch (err) {
      console.error('Failed to toggle status:', err);
      setWatchedEpisodes(prev =>
        currentlyWatched
          ? [...prev, { episodeId, seasonNumber }]
          : prev.filter(ep => ep.episodeId !== episodeId)
      );
    }
  };

  if (loading) {
    return <SkeletonBackdrop />;
  }

  if (error || !series) {
    return <ErrorMessage title="Error" message={error ?? 'Series not found'} />;
  }

  return (
    <div className="w-full space-y-8">
      <SeriesBackdrop series={series} watchedEpisodes={watchedEpisodes} />
      <SeriesSeasons
        seriesId={series.tmdbId}
        seasons={series.seasons}
        watchedEpisodes={watchedEpisodes}
        onToggleWatched={handleToggleWatched}
      />
    </div>
  );
};
