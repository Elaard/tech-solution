import React from 'react';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './Routes';
import HomePage from './pages/HomePage';
import ServicesContext from './contexts/ServicesContext';
import CartContext from './contexts/CartContext';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.Home,
        element: <HomePage />,
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
