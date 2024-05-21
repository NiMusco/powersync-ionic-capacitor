import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import SystemProvider from '@shared/powersync/Provider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <SystemProvider>
      <App />
    </SystemProvider>
  </React.StrictMode>,
);
