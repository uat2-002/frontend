import {Outlet, Navigate} from 'react-router-'

export const ProtectedRoutes = () => {
    const user = null;
    return user ? <Outlet/> : <Navigate to='/login'/>;
};