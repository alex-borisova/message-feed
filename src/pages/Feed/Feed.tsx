import { FC, useEffect, useState } from "react";
import { useStore } from "@nanostores/react";

import { $messagesStore, setMessages, handleHasError } from "../../store";
import FeedHeader from "../../components/FeedHeader/FeedHeader";
import FeedSkeleton from "../../components/Skeletons/FeedSkeleton/FeedSkeleton";
import Messages from "../../components/Messages/Messages";

const Feed: FC = () => {
  const messages = useStore($messagesStore);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/messages")
      .then((response) => response.json())
      .then((json) => setMessages(json))
      .catch(() => handleHasError(true))
      .finally(() => setIsLoading(false));

    //unfortunately, if we create a new message,
    //then go to the user's page and return back,
    //then new message will disappear without a normal server

    /* eslint-disable-next-line */
  }, []);

  return (
    <div className="container mx-auto max-w-6xl">
      <FeedHeader name="Feed" withActionButton />
      {isLoading ? <FeedSkeleton /> : <Messages messages={messages} />}
    </div>
  );
};

export default Feed;
