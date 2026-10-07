import type { SeriesDetails, WatchedEpisode } from '@/api/series';
import { useTranslation } from 'react-i18next';

import { StatusSelector } from '@/pages/SeriesDetails/components/StatusDropdown';

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p';

type SeriesBackdropProps = {
  series: SeriesDetails;
  watchedEpisodes: WatchedEpisode[];
};

export const SeriesBackdrop = ({
  series,
  watchedEpisodes: _watchedEpisodes,
}: SeriesBackdropProps) => {
  const { t } = useTranslation();

  const startYear = series.firstAirDate
    ? series.firstAirDate.split('-')[0]
    : '';

  const yearRange = startYear
    ? series.status === 'ongoing'
      ? t('startyearpresent', { startYear })
      : startYear
    : '';

  const backdropUrl = series.backdrop
    ? `${TMDB_IMAGE_BASE}/original${series.backdrop}`
    : null;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl">
      {backdropUrl ? (
        <img
          src={backdropUrl}
          alt={series.title}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 animate-pulse bg-muted" />
      )}

      <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-10">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          {series.title}
        </h1>

        <div className="mt-2 flex items-center gap-2 text-sm text-foreground/70">
          {yearRange && <span>{yearRange}</span>}

          {yearRange && series.numberOfSeasons != null && <span>·</span>}

          {series.numberOfSeasons != null && (
            <span>
              {series.numberOfSeasons === 1
                ? t('numberofseasonsSeason', {
                    numberOfSeasons: series.numberOfSeasons,
                  })
                : t('numberofseasonsSeasons', {
                    numberOfSeasons: series.numberOfSeasons,
                  })}
            </span>
          )}

          <StatusSelector seriesId={series.tmdbId} />
        </div>

        {series.overview && (
          <p className="mt-3 line-clamp-3 max-w-2xl text-sm leading-relaxed text-foreground/80">
            {series.overview}
          </p>
        )}
      </div>
    </div>
  );
};