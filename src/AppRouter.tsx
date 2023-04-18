import React from 'react';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './Routes';
import Home from './pages/Home';
import ServicesContext from './contexts/ServicesContext';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.Home,
        element: <Home />,
      },
    ],
  },
]);

const AppRouter = () => (
  <ServicesContext>
    <RouterProvider router={router} />
  </ServicesContext>
);

export default AppRouter;
