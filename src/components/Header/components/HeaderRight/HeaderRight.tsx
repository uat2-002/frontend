import { UserAvatar } from '@/components/Header/components/HeaderRight/UserAvatar';
import { getAccessToken } from '@/auth/tokenStorage';
import { SignOutButton } from '@/components/Header/components/HeaderRight/SignOutButton';
import { useState } from 'react';
import { PATH_SIGN_IN, PATH_SIGN_UP } from '@/router/path';
import { AuthButton } from '@/components/Header/components/HeaderRight/AuthButton';
import { ColorThemeSwitch } from '@/components/Header/components/ColorThemeSwitch/ColorThemeSwitch.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';

export const HeaderRight = () => {
  const [isSignedIn, setIsSignedIn] = useState(() => Boolean(getAccessToken()));
  const userEmail = localStorage.getItem('userEmail') || 'User';
  const avatarLetter = userEmail.charAt(0).toUpperCase();

  return (
    <div className="ml-auto flex items-center gap-1">
      <ColorThemeSwitch />
      {isSignedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button
                className="flex items-center rounded-full 
              outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-ring"
              >
                <UserAvatar>{avatarLetter}</UserAvatar>
              </button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <SignOutButton onSignedOut={() => setIsSignedIn(false)} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <AuthButton variant="outline" path={PATH_SIGN_IN}>
            Sign In
          </AuthButton>
          <AuthButton variant="default" path={PATH_SIGN_UP}>
            Sign Up
          </AuthButton>
        </>
      )}
    </div>
  );
};
