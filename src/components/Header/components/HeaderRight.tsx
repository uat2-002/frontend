import { BellButton } from '@/components/Header/components/BellButton';
import { UserAvatar } from '@/components/Header/components/UserAvatar';

export const HeaderRight = () => {
  return (
    <div className="ml-auto flex items-center gap-1">
      <BellButton />
      <UserAvatar />
    </div>
  );
};
