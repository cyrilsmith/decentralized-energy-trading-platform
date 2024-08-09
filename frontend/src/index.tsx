import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import config from './config';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './global.less'; // Global styles

// Optionally log app details for debugging
console.log(`Starting ${config.appName} version ${config.appVersion}`);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// Register the service worker for PWA features
serviceWorkerRegistration.register();
