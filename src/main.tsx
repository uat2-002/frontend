import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router';
import App from './App';
import StoryBook from './pages/StoryBook/index';
import './index.css';

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/ui-library', element: <StoryBook />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
