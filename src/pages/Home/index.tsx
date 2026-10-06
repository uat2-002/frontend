import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { useTopSeries } from '@/context/TopSeriesContext';
import { HomeContent } from '@/pages/Home/HomeContent';

export const Home = () => {
  const { error } = useTopSeries();

  return (error && <ErrorMessage title="Failed to load popular series" message={error} />) || <HomeContent />;
};
