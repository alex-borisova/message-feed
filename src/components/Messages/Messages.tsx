import { FC } from "react";

import MessageItem from "./MessageItem/MessageItem";
import { Message } from "../../types/message.types";
import FeedSkeleton from "../Skeletons/FeedSkeleton/FeedSkeleton";

interface MessageItemProps {
  messages: Message[];
  loading?: boolean;
}

const Messages: FC<MessageItemProps> = ({ messages, loading }) => {
  if (loading) return <FeedSkeleton />;

  return (
    <div className="space-y-4 ">
      {messages?.map((item, index) => (
        <MessageItem message={item} key={index} />
      ))}
    </div>
  );
};

export default Messages;
