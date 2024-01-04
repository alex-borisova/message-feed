import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useStore } from "@nanostores/react";

import "./server/server.ts";
import Feed from "./pages/Feed/Feed";
import ErrorAlert from "./components/ErrorAlert/ErrorAlert";
import UserPage from "./pages/UserPage/UserPage";
import { $hasError, handleHasError, loginUser } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/user/:userId",
    element: <UserPage />,
  },
]);

const App = () => {
  const hasError = useStore($hasError);

  useEffect(() => {
    //something like authentication,
    //getting the user under which the interface is visible
    fetch("/api/profile")
      .then((response) => response.json())
      .then((json) => loginUser(json))
      .catch(() => handleHasError(true));
  }, []);

  return (
    <div className="min-h-screen bg-[#eff6ff] px-8 py-5 space-y-7">
      <RouterProvider router={router} />
      {hasError && <ErrorAlert />}
    </div>
  );
};

export default App;
