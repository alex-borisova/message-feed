import { FC } from "react";
import moment from "moment";

interface MessageHeaderProps {
  fullName: string;
  avatar: string;
  date: string;
}

const MessageHeader: FC<MessageHeaderProps> = ({ fullName, avatar, date }) => {
  return (
    <div className="flex gap-x-4 items-center ">
      <img
        className="w-12 h-12 rounded-full object-cover"
        src={avatar}
        alt="auhor"
      />
      <div className="text-center md:text-left ">
        <p className="text-sky-500 font-medium text-base">{fullName}</p>
        <p className="text-slate-400 text-xs">
          {moment(date).format("DD.MM.YYYY HH:mm")}
        </p>
      </div>
    </div>
  );
};

export default MessageHeader;
