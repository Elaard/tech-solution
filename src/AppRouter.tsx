import React from 'react';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './Routes';
import HomePage from './pages/HomePage';
import ServicesContext from './contexts/ServicesContext';
import CartContext from './contexts/CartContext';
import OrderPage from './pages/OrderPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.Home,
        element: <HomePage />,
      },
      {
        path: Routes.Order,
        element: <OrderPage />,
      },
    ],
  },
]);

const AppRouter = () => (
  <ServicesContext>
    <CartContext>
      <RouterProvider router={router} />
    </CartContext>
  </ServicesContext>
);

export default AppRouter;
