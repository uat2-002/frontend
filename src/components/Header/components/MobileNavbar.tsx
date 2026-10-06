import { PUBLIC_NAVIGATION, PRIVATE_NAVIGATION } from '@/components/Header/constants';
import { useAuth } from '@/context/AuthContext';
import { NavLink } from 'react-router';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import { Button } from '@/components/ui/button';
import { PATH_SIGN_IN, PATH_SIGN_UP } from '@/router/path';

export const MobileNavbar = () => {
  const { isAuth } = useAuth();

  const navigationList = isAuth
    ? [...PRIVATE_NAVIGATION, ...PUBLIC_NAVIGATION]
    : [
        ...PUBLIC_NAVIGATION,
        { label: 'Sign In', to: PATH_SIGN_IN },
        { label: 'Sign Up', to: PATH_SIGN_UP },
      ];

  return (
    <nav className="flex md:hidden items-center justify-end w-full gap-7 pr-2">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              className="flex items-center 
              outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            </Button>
          }
        />
        <DropdownMenuContent align="end">
          {navigationList.map(item => (
            <DropdownMenuItem className="flex flex-col" key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-sm font-medium hover:text-foreground pointer-events-none'
                    : 'text-sm transition-colors hover:text-foreground'
                }
              >
                {item.label}
              </NavLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
