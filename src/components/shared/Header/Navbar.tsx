import { NavLink } from 'react-router';
import { NAVIGATION_LIST } from '@/components/shared/Header/navigation_list';

const Navbar = () => {
  return (
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
};

export default Navbar;
