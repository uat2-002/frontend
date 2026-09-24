import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Plus } from 'lucide-react';
import { Progress, ProgressTrack, ProgressIndicator } from '@/components/ui/progress';

export type UserStatus = 'watching' | 'plan_to_watch' | 'watched' | 'not_worth_it' | 'none';
export type ActionState = 'add' | 'added' | 'none';

type MediaCardProps = {
  title: string;
  description?: string;
  imageUrl?: string | null;
  status?: UserStatus;
  actionState?: ActionState;
  progressValue?: number;
  onAddClick?: () => void;
};

export const MediaCard = ({
  title,
  description,
  imageUrl,
  status = 'none',
  actionState = 'none',
  progressValue = 0,
  onAddClick,
}: MediaCardProps) => {
  const isWatching = status === 'watching';
  const isNotWorthIt = status === 'not_worth_it';

  const bgFallbackColor = status === 'plan_to_watch' ? 'bg-purple-950/80' : 'bg-blue-950/80';

  const badgeConfig = {
    watching: { label: 'Watching', variant: 'destructive' as const },
    plan_to_watch: { label: 'Plan to Watch', variant: 'secondary' as const },
    watched: { label: 'Watched', variant: 'default' as const },
    not_worth_it: { label: 'Not Worth It', variant: 'secondary' as const },
    none: null,
  };

  const currentBadge = badgeConfig[status];

  return (
    <Card
      role="article"
      aria-label={title}
      className={`p-4 flex flex-col h-full bg-card border w-full max-w-[320px] ${
        isNotWorthIt ? 'opacity-50 grayscale-[50%]' : ''
      }`}
    >
      <div
        className={`w-full h-36 ${bgFallbackColor} rounded-lg relative overflow-hidden shrink-0 mb-3`}
        aria-hidden={!imageUrl}
      >
        {imageUrl && (
          <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        )}

        {isWatching && (
          <div className="absolute bottom-0 left-0 w-full z-10">
            <Progress
              value={progressValue}
              aria-label={`Progress for ${title}`}
              className="h-1 w-full bg-transparent rounded-none"
            >
              <ProgressTrack className="h-1 bg-muted/40 rounded-none">
                <ProgressIndicator className="bg-destructive h-full rounded-none" />
              </ProgressTrack>
            </Progress>
          </div>
        )}
      </div>

      <div className="flex-1 space-y-1">
        <h4 className="font-semibold text-foreground text-base line-clamp-1" title={title}>
          {title}
        </h4>
        <p className="text-xs text-muted-foreground line-clamp-2" title={description}>
          {description}
        </p>
      </div>

      <div className="mt-4 shrink-0 flex items-end">
        {actionState === 'add' ? (
          <Button
            variant="outline"
            aria-label={`Add ${title} to your list`}
            className="w-full bg-white text-black hover:bg-white/90 font-medium"
            onClick={onAddClick}
          >
            <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
            Add
          </Button>
        ) : actionState === 'added' ? (
          <Button
            variant="secondary"
            className="w-full bg-secondary/80 text-muted-foreground hover:bg-secondary cursor-default font-medium"
            disabled
            aria-label={`${title} is already added to your list`}
          >
            <Check className="w-4 h-4 mr-2" aria-hidden="true" />
            Added
          </Button>
        ) : currentBadge ? (
          <Badge
            variant={currentBadge.variant}
            className="text-xs rounded-md"
            aria-label={`Status: ${currentBadge.label}`}
          >
            {currentBadge.label}
          </Badge>
        ) : null}
      </div>
    </Card>
  );
};
