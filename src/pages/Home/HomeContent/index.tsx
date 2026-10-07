import type { ReactElement } from 'react';
import { HomeTitle } from '@/pages/Home/HomeContent/HomeTitle';
import { TopSeriesCards } from '@/pages/Home/HomeContent/TopSeriesCards';
import { SearchMore } from '@/pages/Home/HomeContent//SearchMore';

export const HomeContent = (): ReactElement => {
  return (
    <>
      <HomeTitle />
      <TopSeriesCards />
      <SearchMore />
    </>
  );
};
