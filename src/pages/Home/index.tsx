import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { useTopSeries } from '@/context/TopSeriesContext';
import { HomeContent } from '@/pages/Home/HomeContent';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { error } = useTopSeries();
  const { t } = useTranslation();

  return (
    (error && (
      <ErrorMessage
        title={t('failedToLoadPopularSeries')}
        message={error}
      />
    )) || <HomeContent />
  );
};