import { useEffect, useState } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { Empty, EmptyDescription } from '@/components/ui/empty';
import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { EpisodeItem } from '@/pages/SeriesDetails/components/EpisodeItem';
import { fetchSeasonEpisodes, type Episode, type SeriesSeasonSummary } from '@/api/series';

type SeasonAccordionItemProps = {
  seriesId: string | number;
  season: SeriesSeasonSummary;
  isOpen: boolean;
};

export const SeasonAccordionItem = ({ seriesId, season, isOpen }: SeasonAccordionItemProps) => {
  const [episodes, setEpisodes] = useState<Episode[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen || episodes !== null) return;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchSeasonEpisodes(seriesId, season.seasonNumber);
        setEpisodes(data.episodes);
      } catch {
        setError('Failed to load episodes for this season.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [isOpen, episodes, seriesId, season.seasonNumber]);

  return (
    <AccordionItem value={String(season.seasonNumber)} className="border-none">
      <AccordionTrigger className="w-full items-center px-4 py-3 sm:px-6 sm:py-4 hover:no-underline hover:bg-muted/30 transition-colors">
        <span className="font-semibold text-base text-foreground">{season.name}</span>
      </AccordionTrigger>

      <AccordionContent className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1">
        {loading && (
          <div className="flex flex-col gap-2">
            <Skeleton className="h-11.5 w-full rounded-lg" />
            <Skeleton className="h-11.5 w-full rounded-lg" />
            <Skeleton className="h-11.5 w-full rounded-lg" />
          </div>
        )}

        {!loading && error && (
          <ErrorMessage
            title="Failed to load episodes"
            message={error}
            className="my-2 w-full max-w-none"
          />
        )}

        {!loading && !error && episodes && (
          <>
            {episodes.length === 0 ? (
              <Empty className="py-4">
                <EmptyDescription>No episodes available.</EmptyDescription>
              </Empty>
            ) : (
              <div className="flex flex-col gap-2">
                {episodes.map(episode => (
                  <EpisodeItem key={episode.tmdbId} episode={episode} />
                ))}
              </div>
            )}
          </>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};
