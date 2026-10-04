import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { TanStackProvider } from '@/providers/TanStackProvider/TanStackProvider';
import { AuthProvider } from '@/context/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <TanStackProvider>
        <App />
      </TanStackProvider>
    </AuthProvider>
  </StrictMode>
);
