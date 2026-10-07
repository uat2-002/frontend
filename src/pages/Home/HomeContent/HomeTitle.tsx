import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

export const HomeTitle = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="p-5 pb-0">
      <h3 className="pt-4 pb-4 text-lg font-semibold">
        {t('popularSeries')}
      </h3>
    </div>
  );
};