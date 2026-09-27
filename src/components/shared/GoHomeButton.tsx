import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import { PATH_HOME } from '@/router/path';

export const GoHomeButton = () => (
    <Button variant="default" size="icon" render={<a href={ PATH_HOME }/>} nativeButton={false}>
      <ArrowLeftIcon />
    </Button>
)
