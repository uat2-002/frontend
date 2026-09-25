import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Plus, Star } from 'lucide-react';
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
  rating?: number;
  releaseYear?: string;
};

export const MediaCard = ({
  title,
  description,
  imageUrl,
  status = 'none',
  actionState = 'none',
  progressValue = 0,
  onAddClick,
  rating,
  releaseYear,
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
      className={`flex flex-col h-full bg-card border w-full max-w-[280px] overflow-hidden cursor-pointer ${
        isNotWorthIt ? 'opacity-50 grayscale-[50%]' : ''
      }`}
    >
      <div
        className={`w-full aspect-[2/3] ${bgFallbackColor} relative shrink-0 overflow-hidden`}
        aria-hidden={!imageUrl}
      >
        {imageUrl && (
          <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        )}

        {isWatching && (
          <div className="absolute bottom-0 left-0 w-full z-20">
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

      <div className="flex-1 flex flex-col p-4 pt-3">
        <div className="flex-1 space-y-1">
          <h4 className="font-semibold text-foreground text-base line-clamp-1" title={title}>
            {title}
          </h4>
          {description && (
            <p className="text-xs text-muted-foreground line-clamp-2" title={description}>
              {description}
            </p>
          )}
        </div>

        {(rating || releaseYear) && (
          <div className="flex items-center gap-2 text-xs font-medium mt-2 mb-2">
            {rating && (
              <span className="flex items-center text-yellow-500">
                <Star className="w-3 h-3 mr-1 fill-current" />
                {rating.toFixed(1)}
              </span>
            )}
            {releaseYear && <span className="text-muted-foreground">{releaseYear}</span>}
          </div>
        )}

        <div className="mt-3 shrink-0 flex items-end">
          {actionState === 'add' ? (
            <Button
              variant="outline"
              aria-label={`Add ${title} to your list`}
              className="w-full bg-white text-black hover:bg-white/90 font-medium h-9"
              onClick={onAddClick}
            >
              <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
              Add
            </Button>
          ) : actionState === 'added' ? (
            <Button
              variant="secondary"
              className="w-full bg-secondary/80 text-muted-foreground hover:bg-secondary cursor-default font-medium h-9"
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
      </div>
    </Card>
  );
};
