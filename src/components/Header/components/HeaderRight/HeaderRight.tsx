import { BellButton } from '@/components/Header/components/HeaderRight/BellButton';
import { UserAvatar } from '@/components/Header/components/HeaderRight/UserAvatar';
import { getAccessToken } from '@/auth/tokenStorage';
import { SignOutButton } from '@/components/Header/components/HeaderRight/SignOutButton';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PATH_SIGN_IN, PATH_SIGN_UP } from '@/router/path';

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
            <Button
              size="lg"
              variant="outline"
              render={<a href={ PATH_SIGN_IN }/>}
              nativeButton={false}
            >Sign In</Button>

            <Button
              size="lg"
              variant="default"
              render={<a href={ PATH_SIGN_UP }/>}
              nativeButton={false}
            >Sign Up</Button>
          </>
      }
    </div>
  );
};
