import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BellButton = () => {
  return (
    <Button variant="ghost" size="icon" aria-label="Notifications">
      <Bell className="size-4" />
    </Button>
  );
};

export default BellButton;
