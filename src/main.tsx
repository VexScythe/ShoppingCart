import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home.tsx';
import { Shop } from './pages/Shop.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { CartProvider } from './stores/CartContext.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Shop',
    element: <Shop />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
