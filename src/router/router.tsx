import { Home } from '@/pages/Home';
import StoryBook from '@/pages/StoryBook/index';
import { createBrowserRouter } from 'react-router';
import { PATH_HOME, PATH_UI_LIBRARY } from './path';

export const router = createBrowserRouter([
  { path: PATH_HOME, element: <Home /> },
  { path: PATH_UI_LIBRARY, element: <StoryBook /> },
]);
