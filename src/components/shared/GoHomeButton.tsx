import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import { PATH_HOME } from '@/router/path';
import { useNavigate } from 'react-router';

export const GoHomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button variant="default" size="icon" onClick={() => navigate(PATH_HOME)}>
      <ArrowLeftIcon />
    </Button>
  );
};
