import { FC } from "react";
import MessageItem from "./Message/MessageItem";
import { testMessage } from "../../testData/testData";
import FeedHeader from "./FeedHeader/FeedHeader";

const Feed: FC = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <FeedHeader />
      <MessageItem message={testMessage} />
    </div>
  );
};

export default Feed;
