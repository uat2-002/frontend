import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Empty, EmptyDescription } from '@/components/ui/empty';
import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { EpisodeItem } from '@/pages/SeriesDetails/components/EpisodeItem';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import {
  fetchSeasonEpisodes,
  type Episode,
  type SeriesSeasonSummary,
  type WatchedEpisode,
} from '@/api/series';

type SeasonAccordionItemProps = {
  seriesId: string | number;
  season: SeriesSeasonSummary;
  isOpen: boolean;
  watchedRecords: WatchedEpisode[];
  onToggleWatched: (
    episodeId: number,
    seasonNumber: number,
    currentlyWatched: boolean,
  ) => void;
};

export const SeasonAccordionItem = ({
  seriesId,
  season,
  isOpen,
  watchedRecords,
  onToggleWatched,
}: SeasonAccordionItemProps) => {
  const { t } = useTranslation();

  const [episodes, setEpisodes] = useState<Episode[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen || episodes !== null) return;

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const seasonData = await fetchSeasonEpisodes(
          seriesId,
          season.seasonNumber,
        );

        setEpisodes(seasonData.episodes);
      } catch {
        setError(t('failedToLoadEpisodes'));
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [isOpen, episodes, seriesId, season.seasonNumber, t]);

  const totalSeasonEpisodes = season?.episodeCount ?? 0;

  const watchedSeasonEpisodes = (watchedRecords || []).filter(
    record => record.seasonNumber === season.seasonNumber,
  ).length;

  const progressPercentage =
    totalSeasonEpisodes > 0
      ? Math.round((watchedSeasonEpisodes / totalSeasonEpisodes) * 100)
      : 0;

  return (
    <AccordionItem
      value={String(season.seasonNumber)}
      className="border-none"
    >
      <AccordionTrigger className="items-center px-4 py-3 hover:bg-muted/30 hover:no-underline sm:px-6 sm:py-4">
        <div className="flex w-full items-center justify-between gap-4 pr-4">
          <span className="text-base font-semibold text-foreground">
            {season.name}
          </span>

          <div className="flex w-1/3 items-center justify-end gap-3">
            <Progress
              value={progressPercentage}
              className="hidden h-2 w-full max-w-[100px] sm:block"
            />

            <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
              {watchedSeasonEpisodes} / {totalSeasonEpisodes}
            </span>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-4 pb-4 pt-1 sm:px-6 sm:pb-6">
        {loading && (
          <div className="flex flex-col gap-2">
            <Skeleton className="h-11.5 w-full rounded-lg" />
            <Skeleton className="h-11.5 w-full rounded-lg" />
            <Skeleton className="h-11.5 w-full rounded-lg" />
          </div>
        )}

        {!loading && error && (
          <ErrorMessage
            title={t('failedToLoadEpisodes')}
            message={error}
            className="my-2 w-full max-w-none"
          />
        )}

        {!loading && !error && episodes && (
          <>
            {episodes.length === 0 ? (
              <Empty className="py-4">
                <EmptyDescription>
                  {t('noEpisodesAvailable')}
                </EmptyDescription>
              </Empty>
            ) : (
              <div className="flex flex-col gap-2">
                {episodes.map(episode => {
                  const isWatched = (watchedRecords || []).some(
                    record => record.episodeId === episode.tmdbId,
                  );

                  return (
                    <EpisodeItem
                      key={episode.tmdbId}
                      episode={episode}
                      isWatched={isWatched}
                      onToggle={(episodeId, currentlyWatched) =>
                        onToggleWatched(
                          episodeId,
                          season.seasonNumber,
                          currentlyWatched,
                        )
                      }
                    />
                  );
                })}
              </div>
            )}
          </>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};