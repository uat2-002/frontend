import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface UserInitials {
  children?: string;
}

const UserAvatar = ({children = "New"}: UserInitials) => {
  return (
    <Avatar className="ml-1 size-8">
      <AvatarFallback className="text-xs">
        {children}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
