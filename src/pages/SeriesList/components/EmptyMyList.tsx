import { PATH_BROWSE } from '@/router/path';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import type { ReactElement } from 'react';

export const EmptyMyList = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 p-8 text-center">
      <h2 className="text-xl font-semibold">Your list is empty</h2>

      <p className="text-muted-foreground">
        Find a series you'd like to watch and add it to your list
      </p>

      <Button className="cursor-pointer" onClick={() => navigate(PATH_BROWSE)}>
        Click here to discover a world of incredible series
      </Button>
    </div>
  );
};