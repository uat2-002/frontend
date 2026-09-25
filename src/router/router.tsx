import { AppLayout } from '@/components/AppLayout';
import type { AuthUser } from '@/components/ProtectedRoutes/ProtectedRoutes';
import { ProtectedRoutes } from '@/components/ProtectedRoutes/ProtectedRoutes';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { SeriesList } from '@/pages/SeriesList';
import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { BrowsePage } from '@/pages/Browse';
import UiLibrary from '@/pages/UiLibrary';
import {
  PATH_HOME,
  PATH_MY_LIST,
  PATH_NOT_FOUND,
  PATH_SIGN_IN,
  PATH_SIGN_UP,
  PATH_UI_LIBRARY,
  PATH_BROWSE,
} from '@/router/path';
import { createBrowserRouter } from 'react-router';

// mocked: add user for testing here
const user: AuthUser | null = null;

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <ProtectedRoutes user={user} />,
        children: [{ path: PATH_MY_LIST, element: <SeriesList /> }],
      },
      { path: PATH_HOME, element: <Home /> },
      { path: PATH_UI_LIBRARY, element: <UiLibrary /> },
      { path: PATH_BROWSE, element: <BrowsePage /> },
      { path: PATH_NOT_FOUND, element: <NotFound /> },
    ],
  },
  { path: PATH_SIGN_UP, element: <SignUp /> },
  { path: PATH_SIGN_IN, element: <SignIn /> },
]);
