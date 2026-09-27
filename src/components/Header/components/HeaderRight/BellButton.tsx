import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

export const BellButton = () => {
  return (
    <Button variant="ghost" size="icon" aria-label="Notifications">
      <Bell className="size-4" />
    </Button>
  );
};
