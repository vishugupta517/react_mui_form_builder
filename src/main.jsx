import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScopedCssBaseline>
      <App />
    </ScopedCssBaseline>
  </StrictMode>
);
