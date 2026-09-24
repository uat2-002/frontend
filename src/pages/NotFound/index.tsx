import { Button } from '@/components/ui/button';
import { PATH_HOME } from '@/router/path';
import { Link } from 'react-router';

export const NotFound = () => (
  <div className="mx-auto flex min-h-dvh max-w-7xl flex-col items-center justify-center gap-8 p-8 md:gap-12 md:p-16">
    <div className="text-center">
      <h1 className="mb-2 text-3xl font-bold">Page Not Found</h1>
      <p>Oops! The page you're trying to access doesn't exist.</p>
      <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
        <Link to={PATH_HOME}>
          <Button className="h-9 px-4 py-2 cursor-pointer">Back to My List</Button>
        </Link>
      </div>
    </div>
  </div>
);
