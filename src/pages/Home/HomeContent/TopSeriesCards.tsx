import { MediaCard } from '@/components/shared/MediaCard';
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';
import { SkeletonCard } from '@/components/shared/skeletons/SkeletonCard';
import { useTopSeries } from '@/context/TopSeriesContext';
import type { ReactNode } from 'react';
import { useUserSeries } from '@/context/UserSeriesContext';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router';
import { PATH_SIGN_IN } from '@/router/path';

export const TopSeriesCards = (): ReactNode => {
  const { loading, topSeriesList } = useTopSeries();
  const { addedSeriesIds, handleAddSeriesToMyList } = useUserSeries();
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const handleProtectedAddSeries = (seriesId: number) => {
    if (!isAuth) {
      sessionStorage.setItem('pendingAddSeries', JSON.stringify({ seriesId }));
      navigate(PATH_SIGN_IN);
      return;
    }

    handleAddSeriesToMyList(seriesId);
  };
  return (
    <div className="p-5 grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
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
              actionState={addedSeriesIds.includes(+series.id) ? 'added' : 'add'}
              onAddClick={() => handleProtectedAddSeries(+series.id)}
              href={`/series/${series.id}`}
            />
          ))}
    </div>
  );
};
