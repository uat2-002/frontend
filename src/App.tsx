import { RouterProvider } from 'react-router';
import { router } from '@/router/router';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
