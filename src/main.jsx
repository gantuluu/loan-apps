import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App as KonstaApp } from 'konsta/react';
import App from './app/App.jsx';
import { ThemeProvider, useTheme } from './hooks/useTheme.js';
import './styles.css';

function Root() {
  const { dark } = useTheme();

  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
    }
  }, []);

  return (
    <BrowserRouter>
      <KonstaApp theme="material" dark={dark} safeAreas>
        <App />
      </KonstaApp>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>,
);
