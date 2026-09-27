import { getAccessToken } from '@/auth/tokenStorage';
import { PATH_SIGN_IN } from '@/router/path';
import { Navigate, Outlet } from 'react-router';

export const ProtectedRoutes = () => {
  return getAccessToken()
    ? <Outlet />
    : <Navigate to={PATH_SIGN_IN} replace />;
};
