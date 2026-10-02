import { PUBLIC_NAVIGATION, PRIVATE_NAVIGATION } from '@/components/Header/constants';
import { getAccessToken } from '@/auth/tokenStorage';
import { NavLink } from 'react-router';

export const Navbar = () => {
  const isAuth = Boolean(getAccessToken());

  const navigationList = isAuth ? [...PRIVATE_NAVIGATION, ...PUBLIC_NAVIGATION] : PUBLIC_NAVIGATION;

  return (
    <nav className="ml-10 flex items-center gap-7">
      {navigationList.map(item => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            isActive
              ? 'text-sm font-medium text-foreground'
              : 'text-sm text-muted-foreground transition-colors hover:text-foreground'
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
