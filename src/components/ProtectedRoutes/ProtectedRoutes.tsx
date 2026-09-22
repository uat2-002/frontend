import {Outlet, Navigate} from 'react-router'

export interface AuthUser {
    email: string;
}

interface ProtectedRoutesProps {
    user: AuthUser | null;
}

export const ProtectedRoutes = ({ user }: ProtectedRoutesProps) => {
    return user ? <Outlet/> : <Navigate to='/login'/>;
};