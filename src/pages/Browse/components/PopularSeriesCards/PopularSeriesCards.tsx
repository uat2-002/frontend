import { MediaCard } from '@/components/shared/MediaCard';
import { SkeletonCard } from '@/components/shared/skeletons/SkeletonCard';
import { useAuth } from '@/context/AuthContext';
import { useTopSeries } from '@/context/TopSeriesContext';
import { useUserSeries } from '@/context/UserSeriesContext';
import { PATH_SIGN_IN } from '@/router/path';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';
import { useTranslation } from 'react-i18next';

export const PopularSeriesCards = (): ReactNode => {
  const { addedSeriesIds, handleAddSeriesToMyList } = useUserSeries();
  const { loading, topSeriesList } = useTopSeries();
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
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold pt-4 pb-4">{t('popularSeries')}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => <SkeletonCard key={index} />)
          : topSeriesList.map(series => (
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
    </div>
  );
};
