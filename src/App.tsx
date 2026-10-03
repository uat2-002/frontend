import { RouterProvider } from 'react-router';
import { router } from '@/router/router';
import { ToastContainer } from 'react-toastify';
import { UserSeriesProvider } from './context/UserSeriesContext';

const App = () => {
  return (
    <UserSeriesProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserSeriesProvider>
  );
};

export default App;
