import { PATH_SIGN_IN } from '@/router/path';
import { Navigate, Outlet } from 'react-router';

export interface AuthUser {
  email: string;
}

type ProtectedRoutesProps = {
  user: AuthUser | null;
};

export const ProtectedRoutes = ({ user }: ProtectedRoutesProps) => {
  return user ? <Outlet /> : <Navigate to={PATH_SIGN_IN} />;
};
