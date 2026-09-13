import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router';
import App from './App';
import StoryPoint from './pages/StoryPoint/index';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ui-library" element={<StoryPoint />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
