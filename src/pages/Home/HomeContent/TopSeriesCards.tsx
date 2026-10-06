import { MediaCard } from '@/components/shared/MediaCard';
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';
import { SkeletonCard } from '@/components/shared/skeletons/SkeletonCard';
import { useTopSeries } from '@/context/TopSeriesContext';
import type { ReactNode } from 'react';

export const TopSeriesCards = (): ReactNode => {
  const { loading, topSeriesList } = useTopSeries();

  return (
    <div className="p-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading
        ? Array.from({ length: 20 }).map((_, index) => <SkeletonCard key={index} />)
        : Array.isArray(topSeriesList) &&
          topSeriesList.map(series => (
            <MediaCard
              key={series.id}
              title={series.title}
              description={series.description}
              imageUrl={
                series.poster
                  ? `https://image.tmdb.org/t/p/w500${series.poster}`
                  : noPosterPlaceholder
              }
              rating={series.rating}
              releaseYear={series.releaseDate ? series.releaseDate.split('-')[0] : ''}
            />
          ))}
    </div>
  );
};
