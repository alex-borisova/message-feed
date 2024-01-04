import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

import UserCard from "../../components/User/UserCard";
import FeedHeader from "../../components/FeedHeader/FeedHeader";
import Messages from "../../components/Messages/Messages";
import {
  handleHasError,
  $userMessagesStore,
  setUserMessages,
} from "../../store";
import BackButton from "../../components/BackButton/BackButton";
import { $user, setUser } from "../../store/user";

const UserPage = () => {
  const userId = sessionStorage.getItem("userId") || "";
  const userMessages = useStore($userMessagesStore);
  const userData = useStore($user);

  const feedName = userData ? `${userData?.name}'s Feed` : "";

  const [loadingUser, setLoadingUser] = useState<boolean>(false);
  const [loadingFeed, setLoadingFeed] = useState<boolean>(false);

  const getUser = () => {
    setLoadingUser(true);
    fetch(`/api/profile/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
        setLoadingUser(false);
      })
      .catch(() => handleHasError(true));
  };

  const getMessages = () => {
    //if we had a normal server then we make call with search query parameters:
    //fetch("/api/messages?search=user.id:1").then((res) => .....).catch(...);
    setLoadingFeed(true);
    fetch(`/api/messages/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        setUserMessages(json);
        setLoadingFeed(false);
      })
      .catch(() => handleHasError(true));
  };

  useEffect(() => {
    getUser();
    getMessages();

    /* eslint-disable-next-line */
  }, [userId]);

  return (
    <div className="min-h-screen bg-[#eff6ff] px-8 py-5 space-y-7">
      <BackButton />
      <UserCard user={userData} loading={loadingUser} />
      <div className="container mx-auto max-w-4xl">
        <FeedHeader name={feedName} />
        <Messages messages={userMessages} loading={loadingFeed} />
      </div>
    </div>
  );
};

export default UserPage;
