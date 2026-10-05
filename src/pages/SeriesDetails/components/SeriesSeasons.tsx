import { useState } from 'react';
import { Accordion } from '@/components/ui/accordion';
import { Empty, EmptyDescription } from '@/components/ui/empty';
import { SeasonAccordionItem } from '@/pages/SeriesDetails/components/SeasonAccordionItem';
import type { SeriesSeasonSummary, WatchedEpisode } from '@/api/series';

type SeriesSeasonsProps = {
  seriesId: string | number;
  seasons: SeriesSeasonSummary[];
  watchedEpisodes: WatchedEpisode[];
  onToggleWatched: (episodeId: number, seasonNumber: number, currentlyWatched: boolean) => void;
};

export const SeriesSeasons = ({
  seriesId,
  seasons,
  watchedEpisodes,
  onToggleWatched,
}: SeriesSeasonsProps) => {
  const [openSeasons, setOpenSeasons] = useState<string[]>([]);

  if (!seasons || seasons.length === 0) {
    return (
      <Empty className="rounded-xl border bg-card/40 p-6">
        <EmptyDescription>No season information available for this series.</EmptyDescription>
      </Empty>
    );
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight text-foreground">Seasons & Episodes</h2>

      <Accordion
        multiple
        value={openSeasons}
        onValueChange={setOpenSeasons}
        className="rounded-xl border border-border/60 bg-card/30 overflow-hidden divide-y divide-border/60"
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
