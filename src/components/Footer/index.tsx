import { Separator } from '@/components/ui/separator';
import { PATH_PRIVACY } from '@/router/path';
import { useNavigate } from 'react-router';
import { Button } from '../ui/button';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <Separator />

      <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
        <p className="text-center font-medium text-balance">
          Series Tracker
          {` ©${new Date().getFullYear()}`}{' '}
          <Button variant="link" className="underline cursor-pointer" size="lg" onClick={ () => navigate(PATH_PRIVACY) }>
            Privacy policy
          </Button>
        </p>
      </div>
    </footer>
  );
};
