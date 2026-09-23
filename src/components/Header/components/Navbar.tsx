import { NAVIGATION_LIST } from '@/components/Header/constants';
import { NavLink } from 'react-router';

export const Navbar = () => (
  <nav className="ml-10 flex items-center gap-7">
    {NAVIGATION_LIST.map(item => (
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
