import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App as KonstaApp } from 'konsta/react';
import App from './App.jsx';
import './styles.css';

function Root() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
    }
  }, []);

  return (
    <BrowserRouter>
      <KonstaApp theme="material" safeAreas>
        <App />
      </KonstaApp>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
