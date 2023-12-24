import { FC, useContext, useEffect } from "react";
import { AppContext } from "../../AppContextProvider";

import MessageItem from "./Message/MessageItem";
import FeedHeader from "./FeedHeader/FeedHeader";

const Feed: FC = () => {
  const { messages, setMessages } = useContext(AppContext);

  useEffect(() => {
    fetch("/api/messages")
      .then((response) => response.json())
      .then((json) => setMessages(json))
      .catch((error) => console.log("Error fetching messages", error));
    /* eslint-disable-next-line */
  }, []);

  return (
    <div className="container mx-auto max-w-4xl">
      <FeedHeader />
      <div className="space-y-4 ">
        {messages?.map((item, index) => (
          <MessageItem message={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
