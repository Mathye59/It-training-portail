import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/components_reutilisable/ScrollToTop.tsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ScrollToTop />
      {/* permet de remonter en haut de page en cas de clique sur lien*/}
    </BrowserRouter>
  </React.StrictMode>
);
