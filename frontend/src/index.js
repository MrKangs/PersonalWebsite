import React from 'react';
import { createRoot } from 'react-dom';
import { Helmet } from 'react-helmet';
import favicon from './assets/favicon-16x16.png'; // adjust the path to your favicon file
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <App />
  </>
);
