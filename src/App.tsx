import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./server/server.ts";

import Feed from "./pages/Feed/Feed";
import UserPage from "./pages/UserPage/UserPage";
import Layout from "./components/Layout/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/feed" replace />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/user/:userId",
        element: <UserPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
