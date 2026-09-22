import { Home } from '@/pages/Home';
import StoryBook from '@/pages/StoryBook/index';
import NotFound from '@/pages/NotFound';
import { createBrowserRouter } from 'react-router';
import AppLayout from '@/components/shared/AppLayout';
import { PATH_HOME, PATH_UI_LIBRARY, PATH_LOGIN, PATH_REGISTRATION, PATH_MY_LIST, PATH_SIGN_UP, PATH_NOT_FOUND } from '@/router/path';
import Login from '@/pages/Login';
import Registration from '@/pages/Registration';
import { ProtectedRoutes } from '@/components/ProtectedRoutes/ProtectedRoutes';
import type { AuthUser } from '@/components/ProtectedRoutes/ProtectedRoutes';

// mocked: add user for testing here
const user: AuthUser | null = null;
import SignUpPage from '@/pages/SignUp/index';
import { MyList } from '@/pages/MyList';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { 
    element: <ProtectedRoutes user={user} />, 
    children: [
    { path: PATH_HOME, element: <Home /> },
      { path: PATH_MY_LIST, element: <MyList /> },
    ],
  },
  { path: PATH_SIGN_UP, element: <SignUpPage /> },
    { path: PATH_UI_LIBRARY, element: <StoryBook /> },
  { path: PATH_NOT_FOUND, element: <NotFound /> },
    ]
  }, 
  { path: PATH_LOGIN, element: <Login /> },
  { path: PATH_REGISTRATION, element: <Registration /> },
]);
