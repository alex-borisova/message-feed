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
import { User } from "../../types/user.types";
import FeedSkeleton from "../../components/Skeletons/FeedSkeleton/FeedSkeleton";

const UserPage = () => {
  const userId = sessionStorage.getItem("userId") || "";
  const userMessages = useStore($userMessagesStore);

  const [user, setUser] = useState<User>();
  const feedName = user ? `${user?.name}'s Feed` : "";

  useEffect(() => {
    fetch(`/api/profile/${userId}`)
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch(() => handleHasError(true));

    //if we had a normal server then we make call with search query parameters:
    //fetch("/api/messages?search=user.id:1").then((res) => .....).catch(...);
    fetch(`/api/messages/${userId}`)
      .then((response) => response.json())
      .then((json) => setUserMessages(json))
      .catch(() => handleHasError(true));

    return () => setUserMessages(undefined); //TODO
  }, [userId]);

  return (
    <div className="min-h-screen bg-[#eff6ff] px-8 py-5 space-y-7">
      <UserCard user={user} />
      <div className="container mx-auto max-w-4xl">
        <FeedHeader name={feedName} />
        {userMessages ? <Messages messages={userMessages} /> : <FeedSkeleton />}
      </div>
    </div>
  );
};

export default UserPage;
