import { BellButton } from '@/components/Header/components/BellButton';
import { UserAvatar } from '@/components/Header/components/UserAvatar';
import { getAccessToken } from '@/auth/tokenStorage';
import { SignInButton } from '@/components/Header/components/SignInButton';
import { SignOutButton } from '@/components/Header/components/SignOutButton';
import { useState } from 'react';

export const HeaderRight = () => {
  const [, setIsSignedIn] = useState(
    () => Boolean(getAccessToken())
  );

  return (
    <div className="ml-auto flex items-center gap-1">
      <BellButton />
      <UserAvatar />
      { getAccessToken() 
        ? <SignOutButton onSignedOut={() => setIsSignedIn(false)} />
        : <SignInButton />
      }
    </div>
  );
};
