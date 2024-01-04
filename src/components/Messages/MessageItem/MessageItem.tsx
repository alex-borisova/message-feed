import { FC } from "react";
import { Message } from "../../../types/message.types";
import CardWrapper from "../../CardWrapper/CardWrapper";
import MessageHeader from "../MessageHeader/MessageHeader";

interface MessageItemProps {
  message: Message;
}

const MessageItem: FC<MessageItemProps> = ({ message }) => {
  return (
    <CardWrapper>
      <div className={`p-5 space-y-4 w-full`}>
        <MessageHeader user={message.author} date={message.date} />
        <p>{message.content}</p>
      </div>
    </CardWrapper>
  );
};

export default MessageItem;
