import type { Episode } from '@/api/series';
import { Checkbox } from '@/components/ui/checkbox';
import { useTranslation } from 'react-i18next';

type EpisodeItemProps = {
  episode: Episode;
  isWatched: boolean;
  onToggle: (episodeId: number, currentlyWatched: boolean) => void;
};

export const EpisodeItem = ({
  episode,
  isWatched,
  onToggle,
}: EpisodeItemProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-4 rounded-lg border bg-card p-3 text-card-foreground">
      <Checkbox
        checked={isWatched}
        onCheckedChange={() => onToggle(episode.tmdbId, isWatched)}
      />

      <span className="w-12 shrink-0 text-sm font-medium text-muted-foreground">
        {t('epEpisodenumber', {
          episodeNumber: episode.episodeNumber,
        })}
      </span>

      <span className="text-sm font-medium text-foreground">
        {episode.title}
      </span>
    </div>
  );
};