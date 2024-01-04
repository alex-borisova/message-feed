import { FC } from "react";

import MessageItem from "./MessageItem/MessageItem";
import { Message } from "../../types/message.types";

interface MessageItemProps {
  messages: Message[];
}

const Messages: FC<MessageItemProps> = ({ messages }) => {
  return (
    <div className="space-y-4 ">
      {messages?.map((item, index) => (
        <MessageItem message={item} key={index} />
      ))}
    </div>
  );
};

export default Messages;
