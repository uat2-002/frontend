import { Home } from '@/pages/Home';
import StoryBook from '@/pages/StoryBook/index';
import NotFound from '@/pages/NotFound';
import { createBrowserRouter } from 'react-router';
import AppLayout from '@/components/shared/AppLayout';
import { PATH_HOME, PATH_UI_LIBRARY, PATH_MY_LIST, PATH_NOT_FOUND } from '@/router/path';
import { MyList } from '@/pages/MyList';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: PATH_HOME, element: <Home /> },
      { path: PATH_MY_LIST, element: <MyList /> },
    ],

  },
  { path: PATH_UI_LIBRARY, element: <StoryBook /> },
  { path: PATH_NOT_FOUND, element: <NotFound /> },
]);
