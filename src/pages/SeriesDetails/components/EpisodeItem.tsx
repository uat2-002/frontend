import type { Episode } from '@/api/series';
import { Checkbox } from '@/components/ui/checkbox';

type EpisodeItemProps = {
  episode: Episode;
  isWatched: boolean;
  onToggle: (episodeId: number, currentlyWatched: boolean) => void;
};

export const EpisodeItem = ({ episode, isWatched, onToggle }: EpisodeItemProps) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-card border text-card-foreground">
      <Checkbox checked={isWatched} onCheckedChange={() => onToggle(episode.tmdbId, isWatched)} />
      <span className="text-muted-foreground text-sm font-medium w-12 shrink-0">
        Ep. {episode.episodeNumber}
      </span>
      <span className="font-medium text-sm text-foreground">{episode.title}</span>
    </div>
  );
};
