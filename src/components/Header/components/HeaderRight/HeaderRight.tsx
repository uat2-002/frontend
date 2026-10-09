import { AuthButton } from '@/components/Header/components/HeaderRight/AuthButton';
import { ColorThemeSwitch } from '@/components/Header/components/ColorThemeSwitch/ColorThemeSwitch';
import { LanguageToggle } from '@/components/Header/components/LanguageSwitch/LanguageToggle';
import { SignOutButton } from '@/components/Header/components/HeaderRight/SignOutButton';
import { UserAvatar } from '@/components/Header/components/HeaderRight/UserAvatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger } from '@/components/ui/dropdown-menu.tsx';
import { useAuth } from '@/context/AuthContext';
import { PATH_SIGN_IN, PATH_SIGN_UP } from '@/router/path';
import { useTranslation } from 'react-i18next';

export const HeaderRight = () => {
  const { isAuth } = useAuth();
  const { t } = useTranslation();

  const userEmail = localStorage.getItem('userEmail') || 'User';
  const avatarLetter = userEmail.charAt(0).toUpperCase();

  return (
    <div className="ml-auto flex items-center gap-1">
      <div className="mr-2 flex items-center gap-1">
        <ColorThemeSwitch />
        <LanguageToggle />
      </div>

      {isAuth ? (
        <DropdownMenu>
        <DropdownMenuTrigger
            render={
              <button
                className={
                  'flex cursor-pointer items-center rounded-full ' +
                  'outline-none focus-visible:ring-2 focus-visible:ring-ring'
                }
              >
                <UserAvatar>{avatarLetter}</UserAvatar>
              </button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <SignOutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="hidden items-center gap-2 md:flex">
          <AuthButton variant="outline" path={PATH_SIGN_IN}>
            {t('signIn')}
          </AuthButton>

          <AuthButton variant="default" path={PATH_SIGN_UP}>
            {t('signUp')}
          </AuthButton>
        </div>
      )}
    </div>
  );
};
