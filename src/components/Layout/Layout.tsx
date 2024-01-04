import { FC, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import { $hasError, handleHasError, loginUser } from "../../store";

const Layout: FC = () => {
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
    <div className="min-h-screen bg-[#eff6ff] ">
      <Header />
      <div className="px-8 py-5 space-y-7">
        <Outlet />
      </div>
      {hasError && <ErrorAlert />}
    </div>
  );
};

export default Layout;
