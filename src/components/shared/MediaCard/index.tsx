import { Link } from 'react-router';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Plus, Star } from 'lucide-react';
import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
} from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export type UserStatus = 'watching' | 'plan_to_watch' | 'watched' | 'not_worth_it'  | 'none';

export type ActionState = 'add' | 'added' | 'delete' | 'none';

type MediaCardProps = {
  title: string;
  description?: string;
  imageUrl?: string | null;
  status?: UserStatus;
  actionState?: ActionState;
  progressValue?: number;
  onAddClick?: () => void;
  onDeleteClick?: () => void;
  rating?: number;
  releaseYear?: string;
  href: string;
};

export const MediaCard = ({
  title,
  description,
  imageUrl,
  status = 'none',
  actionState = 'none',
  progressValue = 0,
  onAddClick,
  onDeleteClick,
  rating,
  releaseYear,
  href,
}: MediaCardProps) => {
  const { t } = useTranslation();

  const isWatching = status === 'watching';
  const isNotWorthIt = status === 'not_worth_it';
  const isWatched = status === 'watched';

  const bgFallbackColor =
    status === 'plan_to_watch' ? 'bg-purple-950/80' : 'bg-blue-950/80';

  const badgeConfig = {
    watching: {
      label: t('watching'),
      variant: 'destructive' as const,
    },
    plan_to_watch: {
      label: t('planToWatch'),
      variant: 'secondary' as const,
    },
    watched: {
      label: t('watched'),
      variant: 'success' as const,
    },
    not_worth_it: {
      label: t('notWorthIt'),
      variant: 'secondary' as const,
    },
    none: null,
  };

  const currentBadge = badgeConfig[status];

  return (
    <Card
      role="article"
      aria-label={title}
      className={cn(
        'relative flex h-full w-full max-w-[280px] flex-col border bg-card',
        'overflow-hidden animate-in fade-in-0 zoom-in-95',
        'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        isNotWorthIt ? 'opacity-50 grayscale-[50%]' : '',
      )}
    >
      {href && (
        <Link
          to={href}
          className="absolute inset-0 z-10"
         aria-label={t('viewDetailsForTitle', { title })}
        >
        <span className="sr-only">{t('viewDetails')}</span>
        </Link>
      )}

      <div
        className={`relative aspect-[2/3] w-full shrink-0 overflow-hidden ${bgFallbackColor}`}
        aria-hidden={!imageUrl}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {isWatched && (
          <div
            className="absolute top-1 
            right-1 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 shadow-md backdrop-blur-sm"
            aria-label={t('watched')}
          >
            <Check
              className="h-4 w-4 text-green-400"
              strokeWidth={3}
              aria-hidden="true"
            />
          </div>
        )}

        {isWatching && (
          <div className="absolute bottom-0 left-0 z-20 w-full">
            <Progress
              value={progressValue}
              aria-label={t('progressForTitle', { title })}
              className="h-1 w-full rounded-none bg-transparent"
            >
              <ProgressTrack className="h-1 rounded-none bg-muted/40">
                <ProgressIndicator className="h-full rounded-none bg-destructive" />
              </ProgressTrack>
            </Progress>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 pt-1">
        {currentBadge && (
          <div className="mt-2 mb-2 flex justify-end">
            <Badge
              variant={currentBadge.variant}
              className="rounded-md text-xs"
              aria-label={t('statusLabel', {
                label: currentBadge.label,
              })}
            >
              {currentBadge.label}
            </Badge>
          </div>
        )}

        <div className="flex-1 space-y-1">
          <h4
            className="line-clamp-1 text-base font-semibold text-foreground"
            title={title}
          >
            {title}
          </h4>

          {description && (
            <p
              className="line-clamp-2 text-xs text-muted-foreground"
              title={description}
            >
              {description}
            </p>
          )}
        </div>

        {(rating || releaseYear) && (
          <div className="mt-2 mb-2 flex items-center gap-2 text-xs font-medium">
            {rating && (
              <span className="flex items-center text-yellow-500">
                <Star className="mr-1 h-3 w-3 fill-current" />
                {rating.toFixed(1)}
              </span>
            )}

            {releaseYear && (
              <span className="text-muted-foreground">{releaseYear}</span>
            )}
          </div>
        )}

        <div className="relative z-20 mt-3 flex shrink-0 items-end">
          {actionState === 'add' ? (
            <Button
              variant="outline"
              aria-label={t('addTitleToYourList', { title })}
              className="h-9 w-full bg-white font-medium text-black hover:bg-white/90 dark:text-white"
              onClick={onAddClick}
            >
              <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
              {t('add')}
            </Button>
          ) : actionState === 'added' ? (
            <Button
              variant="secondary"
              className="h-9 w-full cursor-default bg-secondary/80 font-medium text-muted-foreground hover:bg-secondary"
              disabled
              aria-label={t('titleIsAlreadyAddedToYourList', { title })}
            >
              <Check className="mr-2 h-4 w-4" aria-hidden="true" />
              {t('added')}
            </Button>
          ) : actionState === 'delete' ? (
            <Button
              type="button"
              variant="destructive"
              aria-label={t('removeTitleFromYourList', { title })}
              className="h-9 w-full cursor-pointer font-medium"
              onClick={onDeleteClick}
            >
             {t('delete')}
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
};