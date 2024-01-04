import { FC } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { User } from "../../../types/user.types";

interface MessageHeaderProps {
  user: User;
  date: string;
}

const MessageHeader: FC<MessageHeaderProps> = ({ user, date }) => {
  const navigate = useNavigate();
  const handleName = () => {
    sessionStorage.setItem("userId", user.id.toString());
    navigate(`/user/${user.id}`);
  };

  return (
    <div className="flex gap-x-4 items-center ">
      <img
        className="w-12 h-12 rounded-full object-cover"
        src={user.avatar}
        alt="auhor"
      />
      <div className="text-center md:text-left">
        <p
          className="text-sky-500 font-medium text-base hover:underline hover:cursor-pointer"
          onClick={handleName}
        >
          {user.name} {user.surname}
        </p>
        <p className="text-slate-400 text-xs">
          {moment(date).format("DD.MM.YYYY HH:mm")}
        </p>
      </div>
    </div>
  );
};

export default MessageHeader;
