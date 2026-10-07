import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { useTopSeries } from '@/context/TopSeriesContext';
import { PopularSeriesCards } from '@/pages/Browse/components/PopularSeriesCards/PopularSeriesCards';
import { useTranslation } from 'react-i18next';

export const PopularSeriesSection = () => {
  const { error } = useTopSeries();
  const { t } = useTranslation();

  return (
    (error && (
      <ErrorMessage
        title={t('failedToLoadPopularSeries')}
        message={error}
      />
    )) || <PopularSeriesCards />
  );
};