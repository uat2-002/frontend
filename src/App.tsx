import { RouterProvider } from 'react-router';
import { router } from '@/router/router';
import { ToastContainer } from 'react-toastify';
import { UserSeriesProvider } from '@/context/UserSeriesContext';
import { TopSeriesProvider } from '@/context/TopSeriesContext';

const App = () => {
  return (
    <TopSeriesProvider>
      <UserSeriesProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </UserSeriesProvider>
    </TopSeriesProvider>
  );
};

export default App;
