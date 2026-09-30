import { Separator } from '@/components/ui/separator';

import { PATH_PRIVACY } from '@/router/path';

export const Footer = () => {
  return (
    <footer>
      <Separator />

      <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
        <p className="text-center font-medium text-balance">
          Series Tracker
          {` ©${new Date().getFullYear()}`}{' '}
          <a href={PATH_PRIVACY} className="hover:underline">
            Privacy policy
          </a>
        </p>
      </div>
    </footer>
  );
};
