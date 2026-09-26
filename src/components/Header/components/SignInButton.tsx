import { PATH_SIGN_IN } from '@/router/path';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';

export const SignInButton = () => {
  const navigate = useNavigate();
  return (
    <Button size="lg" variant="outline" onClick={() => navigate(PATH_SIGN_IN)}>
      Sign In
    </Button>
  );
};
