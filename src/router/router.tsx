import { Home } from '@/pages/Home';
import StoryBook from '@/pages/StoryBook/index';
import { createBrowserRouter } from 'react-router';
import { PATH_HOME, PATH_UI_LIBRARY, PATH_LOGIN, PATH_REGISTRATION } from './path';
import Login from '@/pages/Login';
import Registration from '@/pages/Registration';
import { ProtectedRoutes } from '@/components/ProtectedRoutes/ProtectedRoutes';
import type { AuthUser } from '@/components/ProtectedRoutes/ProtectedRoutes';

// mocked: add user for testing here
const user: AuthUser | null = null;

export const router = createBrowserRouter([
  { 
    element: <ProtectedRoutes user={user} />, 
    children: [
    { path: PATH_HOME, element: <Home /> },
    { path: PATH_UI_LIBRARY, element: <StoryBook /> },
    ]
  }, 
  { path: PATH_LOGIN, element: <Login /> },
  { path: PATH_REGISTRATION, element: <Registration /> },
]);
