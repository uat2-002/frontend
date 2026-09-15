import { Home } from '@/pages/Home';
import StoryBook from '@/pages/StoryBook/index';
import RegistrationForm from '@/pages/Registration/index';
import { createBrowserRouter } from 'react-router';
import { PATH_HOME, PATH_UI_LIBRARY, PATH_REGISTARTION } from './path';

export const router = createBrowserRouter([
  { path: PATH_HOME, element: <Home /> },
  { path: PATH_UI_LIBRARY, element: <StoryBook /> },
  { path: PATH_REGISTARTION, element: <RegistrationForm /> },
]);
