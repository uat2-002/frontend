import type { ReactElement } from 'react';
import { HomeTitle } from '@/pages/Home/HomeContent/HomeTitle';
import { TopSeriesCards } from '@/pages/Home/HomeContent/TopSeriesCards';

export const HomeContent = (): ReactElement => (
  <>
    <HomeTitle />
    <TopSeriesCards />
  </>
);
