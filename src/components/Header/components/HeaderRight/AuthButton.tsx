import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import type { ComponentProps } from 'react';

type AuthButtonProps = {
  variant: ComponentProps<typeof Button>['variant'];
  path: string;
  children: string;
};

export const AuthButton = ({ variant, path, children }: AuthButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button size="lg" variant={variant} onClick={() => navigate(path)}>
      { children }
    </Button>
  );
};
