import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { ReactNode } from 'react';

type UserAvatarProps = {
  children?: ReactNode;
};

export const UserAvatar = ({ children = 'New' }: UserAvatarProps) => (
  <Avatar className="ml-1 size-8">
    <AvatarFallback className="text-xs">{children}</AvatarFallback>
  </Avatar>
);
