import { FC, useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContextProvider";

import MessageItem from "./Message/MessageItem";
import FeedHeader from "./FeedHeader/FeedHeader";
import Skeleton from "./Skeleton/Skeleton";

const Feed: FC = () => {
  const { messages, setMessages, setIsError } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/messages")
      .then((response) => response.json())
      .then((json) => setMessages(json))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
    /* eslint-disable-next-line */
  }, []);

  return (
    <div className="container mx-auto max-w-4xl">
      <FeedHeader />
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="space-y-4 ">
          {messages?.map((item, index) => (
            <MessageItem message={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
