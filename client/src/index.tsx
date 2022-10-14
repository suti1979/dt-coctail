import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import "./assets/styles/global.scss"
import CoctailProvider from './contexts/coctailCtx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CoctailProvider>
      <App />
    </CoctailProvider>
  </React.StrictMode>
)

reportWebVitals();
