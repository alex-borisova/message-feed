import { FC } from "react";
import { useStore } from "@nanostores/react";

import { $loggedUser } from "../../store";
import Avatar from "../Avatar/Avatar";

const Header: FC = () => {
  const loggedUser = useStore($loggedUser);

  return (
    <nav className="bg-white shadow-xl sticky top-0">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-sky-700">
          Messages Online
        </span>
        <div className="flex items-center gap-x-2">
          <Avatar src={loggedUser?.avatar} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
