import { Button } from '@/components/ui/button';
import { PATH_HOME } from '@/router/path';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div
      className="mx-auto flex min-h-160 max-w-7xl flex-col items-center justify-center
                 gap-8 p-8 md:min-h-dvh md:gap-12 md:p-16"
    >
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold">
          {t('pageNotFound')}
        </h1>

        <p>{t('oopsThePageYoureTryingToAccessDoesntExist')}</p>

        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Link to={PATH_HOME}>
            <Button className="h-9 cursor-pointer px-4 py-2">
              {t('backToMyList')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};