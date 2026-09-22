import {Outlet, Navigate} from 'react-router'
import {PATH_LOGIN } from '@/router/path'

export interface AuthUser {
    email: string;
}

interface ProtectedRoutesProps {
    user: AuthUser | null;
}

export const ProtectedRoutes = ({ user }: ProtectedRoutesProps) => {
    return user ? <Outlet/> : <Navigate to={PATH_LOGIN}/>;
};