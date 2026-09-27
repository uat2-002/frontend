import { BellButton } from '@/components/Header/components/HeaderRight/BellButton';
import { UserAvatar } from '@/components/Header/components/HeaderRight/UserAvatar';
import { getAccessToken } from '@/auth/tokenStorage';
import { SignOutButton } from '@/components/Header/components/HeaderRight/SignOutButton';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PATH_SIGN_IN, PATH_SIGN_UP } from '@/router/path';
import { useNavigate } from 'react-router';

export const HeaderRight = () => {
  const [, setIsSignedIn] = useState(
    () => Boolean(getAccessToken())
  );
  const navigate = useNavigate();

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
              onClick={() => navigate(PATH_SIGN_IN)}
            >Sign In</Button>

            <Button
              size="lg"
              variant="default"
              onClick={() => navigate(PATH_SIGN_UP)}
            >Sign Up</Button>
          </>
      }
    </div>
  );
};
