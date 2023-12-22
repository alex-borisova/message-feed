import { FC } from "react";
import { User } from "../types/user.types";

interface UserInfoProps {
  user: User;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  return (
    <div className="bg-white md:flex rounded-lg p-8 md:p-0 shadow-lg container mx-auto max-w-7xl">
      <img
        className="w-24 h-24 md:w-48 md:h-auto rounded-full md:rounded-l-lg md:rounded-r-none mx-auto object-cover"
        src={user.avatar}
        alt="avatar"
      />
      <div className="pt-6 md:p-8 text-center md:text-left ">
        <p className="text-sky-500 font-medium text-lg">
          {user.name} {user.surname}
        </p>
        <p className="text-slate-700">{user.email}</p>
        <p className="mt-4">{user.description}</p>
      </div>
    </div>
  );
};

export default UserInfo;
