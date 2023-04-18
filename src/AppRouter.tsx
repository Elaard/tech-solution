import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./Routes";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.Default,
        element: <div>basic page</div>
      }
    ]
  }
]);

const AppRouter = () => <RouterProvider router={router} />;


export default AppRouter;