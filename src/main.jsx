import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './hooks/useCart.jsx'; // 👈 Asegúrate que la ruta coincida con tu proyecto
import { ReturnsProvider } from './hooks/ReturnsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>         {/* 👈 Envolvemos la App con el Provider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
