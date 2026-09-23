import { PATH_HOME } from '@/router/path';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

type LogotypeProps = {
  children: ReactNode;
};

export const Logotype = ({ children }: LogotypeProps) => (
  <NavLink to={PATH_HOME} className="text-lg font-semibold">
    {children}
  </NavLink>
);
