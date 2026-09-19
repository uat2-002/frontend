import { Bell } from 'lucide-react';
import { NavLink } from 'react-router';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { NAVIGATION_LIST } from '@/components/shared/Header/navigation_list';

const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-14 max-w-6xl items-center px-6">
        <NavLink to="/" className="text-lg font-semibold">
          Serial Tracker
        </NavLink>
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
        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Notifications"
          >
            <Bell className="size-4" />
          </Button>
          <Avatar className="ml-1 size-8">
            <AvatarFallback className="text-xs">
              SW
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;