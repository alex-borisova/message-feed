import { FC, useEffect, useState } from "react";
import { useStore } from "@nanostores/react";

import { $messagesStore, setMessages, handleHasError } from "../../store";
import FeedHeader from "../../components/FeedHeader/FeedHeader";
import Messages from "../../components/Messages/Messages";

const Feed: FC = () => {
  const messages = useStore($messagesStore);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/messages")
      .then((response) => response.json())
      .then((json) => {
        setMessages(json);
        setLoading(false);
      })
      .catch(() => handleHasError(true));

    //unfortunately, if we create a new message,
    //then go to the user's page and return back,
    //then new message will disappear without a normal server

    /* eslint-disable-next-line */
  }, []);

  return (
    <div className="container mx-auto max-w-6xl">
      <FeedHeader name="Feed" withActionButton />
      <Messages messages={messages} loading={loading} />
    </div>
  );
};

export default Feed;
