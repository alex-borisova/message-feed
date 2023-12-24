import { FC, useContext } from "react";
import { Message } from "../../../types/message.types";
import CardWrapper from "../../CardWrapper/CardWrapper";
import MessageHeader from "./MessageHeader/MessageHeader";
import { AppContext } from "../../../AppContextProvider";

interface MessageItemProps {
  message: Message;
}

const MessageItem: FC<MessageItemProps> = ({ message }) => {
  const { user } = useContext(AppContext);
  const isCurrentUser = message?.author?.id === user?.id;

  return (
    <CardWrapper>
      <div className={`p-5 space-y-4 w-full ${isCurrentUser && "bg-green-50"}`}>
        <MessageHeader
          fullName={`${message.author.name} ${message.author.surname}`}
          avatar={message.author.avatar}
          date={message.date}
        />
        <p>{message.content}</p>
      </div>
    </CardWrapper>
  );
};

export default MessageItem;
