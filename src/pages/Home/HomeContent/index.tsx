import type { ReactElement } from 'react';
import { HomeTitle } from '@/pages/Home/HomeContent/HomeTitle';
import { TopSeriesCards } from '@/pages/Home/HomeContent/TopSeriesCards';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import { PATH_BROWSE } from '@/router/path';

export const HomeContent = (): ReactElement => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate(PATH_BROWSE);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HomeTitle />
      <TopSeriesCards />
      <div className="flex flex-col items-center justify-center text-center mt-12 mb-8 gap-3">
        <h3 className="text-lg font-semibold text-foreground">Looking for more series?</h3>
        <Button size="lg" onClick={handleSearchClick} aria-label="Search for more series">
          Search more series
        </Button>
      </div>
    </>
  );
};
