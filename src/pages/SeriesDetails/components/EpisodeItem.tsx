import type { Episode } from '@/api/series';

type EpisodeItemProps = {
  episode: Episode;
};

export const EpisodeItem = ({ episode }: EpisodeItemProps) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-card border text-card-foreground">
      <span className="text-muted-foreground text-sm font-medium w-12 shrink-0">
        Ep. {episode.episodeNumber}
      </span>
      <span className="font-medium text-sm text-foreground">
        {episode.title}
      </span>
    </div>
  );
};
