import { BellButton } from '@/components/Header/components/BellButton';
import { UserAvatar } from '@/components/Header/components/UserAvatar';
import { getAccessToken } from '@/auth/tokenStorage';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

export const HeaderRight = () => {
  return (
    <div className="ml-auto flex items-center gap-1">
      <BellButton />
      <UserAvatar />
      { getAccessToken() 
        ? <SignOutButton />
        : <SignInButton />
      }
    </div>
  );
};
