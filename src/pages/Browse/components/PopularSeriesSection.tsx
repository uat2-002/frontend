import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { useTopSeries } from '@/context/TopSeriesContext';
import { PopularSeriesCards } from '@/pages/Browse/components/PopularSeriesCards/PopularSeriesCards';

export const PopularSeriesSection = () => {
  const { error } = useTopSeries();

  return (error && <ErrorMessage title="Failed to load popular series" message={error} />) || <PopularSeriesCards />;
};
