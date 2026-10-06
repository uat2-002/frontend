import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { MediaCard } from '@/components/shared/MediaCard';
import { useEffect, useState } from 'react';
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';
import { deleteUserSeries, getMyList } from '@/api/watchlist';
import { useUserSeries } from '@/context/UserSeriesContext';
import { showToast } from '@/lib/toast';
import { EmptyMyList } from '@/pages/SeriesList/components/EmptyMyList';

type MySeriesItem = {
  tmdbId: number;
  title: string;
  poster: string | null;
  overview: string | null;
  userStatus: 'plan_to_watch' | 'watching' | 'watched' | 'not_worth_it';
};

export const SeriesList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mySeriesList, setMySeriesList] = useState<MySeriesItem[]>([]);

  const { setAddedSeriesIds } = useUserSeries();

  useEffect(() => {
    async function fetchMySeriesList() {
      try {
        const response = await getMyList();
        const data = Array.isArray(response) ? response : response.data.series || [];
        setMySeriesList(data);
      } catch {
        setError('Could not receive your list');
      } finally {
        setLoading(false);
      }
    }

    fetchMySeriesList();
  }, []);

  const handleDeleteSeries = async (tmdbId: number) => {
    try {
      await deleteUserSeries(tmdbId);

      setMySeriesList(previousList => previousList.filter(series => series.tmdbId !== tmdbId));

      setAddedSeriesIds(previousIds => previousIds.filter(id => id !== tmdbId));
    } catch (error) {
      showToast(`Couldn't delete series: ${error}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage title="Failed to load your list" message={error} />;
  if (mySeriesList.length === 0) return <EmptyMyList />;

  return (
    <div>
      <h3 className="text-lg font-semibold pt-4 pb-4">Your Series List</h3>
      <div className="grid grid-cols-5 gap-6">
        {mySeriesList.map(series => (
          <MediaCard
            key={series.tmdbId}
            title={series.title}
            description={series.overview ?? undefined}
            imageUrl={
              series.poster
                ? `https://image.tmdb.org/t/p/w500${series.poster}`
                : noPosterPlaceholder
            }
            actionState="delete"
            status={series.userStatus}
            onDeleteClick={() => handleDeleteSeries(series.tmdbId)}
          />
        ))}
      </div>
    </div>
  );
};
