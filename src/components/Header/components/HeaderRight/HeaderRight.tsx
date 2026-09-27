import { BellButton } from '@/components/Header/components/HeaderRight/BellButton';
import { UserAvatar } from '@/components/Header/components/HeaderRight/UserAvatar';
import { getAccessToken } from '@/auth/tokenStorage';
import { SignOutButton } from '@/components/Header/components/HeaderRight/SignOutButton';
import { useState } from 'react';
import { PATH_SIGN_IN, PATH_SIGN_UP } from '@/router/path';
import { AuthButton } from '@/components/Header/components/HeaderRight/AuthButton';

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
        : <>
            <AuthButton variant="outline" path={ PATH_SIGN_IN }>Sign In</AuthButton>
            <AuthButton variant="default" path={ PATH_SIGN_UP }>Sign Up</AuthButton>
          </> 
      }
    </div>
  );
};
