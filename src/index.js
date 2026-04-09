// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind directives included here
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Measure performance if needed
reportWebVitals();
