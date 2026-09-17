import { Home } from '@/pages/Home';
import StoryBook from '@/pages/StoryBook/index';
import NotFound from '@/pages/NotFound';
import { createBrowserRouter } from 'react-router';
import { PATH_HOME, PATH_UI_LIBRARY, PATH_NOT_FOUND } from './path';

export const router = createBrowserRouter([
  { path: PATH_HOME, element: <Home /> },
  { path: PATH_UI_LIBRARY, element: <StoryBook /> },
  { path: PATH_NOT_FOUND, element: <NotFound /> },
]);
