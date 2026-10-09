import {
  PUBLIC_NAVIGATION,
  PRIVATE_NAVIGATION,
} from '@/components/Header/constants';
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

export const Navbar = () => {
  const { isAuth } = useAuth();
  const { t } = useTranslation();

  const navigationList = isAuth
    ? [...PRIVATE_NAVIGATION, ...PUBLIC_NAVIGATION]
    : PUBLIC_NAVIGATION;

  return (
    <nav className="ml-10 hidden items-center gap-7 md:flex">
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
          {t(item.label)}
        </NavLink>
      ))}
    </nav>
  );
};