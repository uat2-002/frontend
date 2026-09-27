import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { TanStackProvider } from '@/providers/TanStackProvider/TanStackProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanStackProvider>
      <App />
    </TanStackProvider>
  </StrictMode>
);
