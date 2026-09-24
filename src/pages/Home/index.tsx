import { HealthCheck } from '@/components/HealthCheck';
import { PopularSeriesSection } from '@/components/shared/PopularSeriesSection';

export const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <HealthCheck />
      <div>
        <h3 className="text-lg font-semibold pt-4 pb-4">Popular series</h3>
        <PopularSeriesSection/>
      </div>
    </>
  );
};
