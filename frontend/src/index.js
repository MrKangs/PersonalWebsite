import React from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import favicon from './assets/favicon-16x16.png'; // adjust the path to your favicon file
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>\
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
