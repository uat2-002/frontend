import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion } from '@/components/ui/accordion';
import { Empty, EmptyDescription } from '@/components/ui/empty';
import { type SeriesSeasonSummary, type WatchedEpisode } from '@/api/series';
import { SeasonAccordionItem } from '@/pages/SeriesDetails/components/SeasonAccordionItem';

type SeriesSeasonsProps = {
  seriesId: string | number;
  seasons: SeriesSeasonSummary[];
  watchedEpisodes: WatchedEpisode[];
  onToggleWatched: (
    episodeId: number,
    seasonNumber: number,
    currentlyWatched: boolean,
  ) => void;
};

export const SeriesSeasons = ({
  seriesId,
  seasons,
  watchedEpisodes,
  onToggleWatched,
}: SeriesSeasonsProps) => {
  const { t } = useTranslation();
  const [openSeasons, setOpenSeasons] = useState<string[]>([]);

  if (!seasons || seasons.length === 0) {
    return (
      <Empty className="rounded-xl border bg-card/40 p-6">
        <EmptyDescription>
          {t('noSeasonInformationAvailableForThisSeries')}
        </EmptyDescription>
      </Empty>
    );
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight text-foreground">
        {t('seasonsEpisodes')}
      </h2>

      <Accordion
        multiple
        value={openSeasons}
        onValueChange={setOpenSeasons}
        className="divide-y divide-border/60 overflow-hidden rounded-xl border border-border/60 bg-card/30"
      >
        {seasons.map(season => (
          <SeasonAccordionItem
            key={season.seasonNumber}
            seriesId={seriesId}
            season={season}
            isOpen={openSeasons.includes(String(season.seasonNumber))}
            watchedRecords={watchedEpisodes}
            onToggleWatched={onToggleWatched}
          />
        ))}
      </Accordion>
    </section>
  );
};