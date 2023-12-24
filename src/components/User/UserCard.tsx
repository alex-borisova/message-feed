import { FC, useContext, useEffect, useState } from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { AppContext } from "../../AppContextProvider";
import Skeleton from "./Skeleton/Skeleton";

const UserCard: FC = () => {
  const { user, setUser, setIsError } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/profile")
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
    /* eslint-disable-next-line */
  }, []);

  return (
    <div className="container mx-auto max-w-7xl">
      <CardWrapper>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <img
              className="w-24 h-24 md:w-48 md:h-auto rounded-full md:rounded-l-lg md:rounded-r-none mx-auto object-cover"
              src={user?.avatar}
              alt="avatar"
            />
            <div className="pt-6 md:p-8 text-center md:text-left ">
              <p className="text-sky-500 font-medium text-lg">
                {user?.name} {user?.surname}
              </p>
              <p className="text-sky-800">{user?.email}</p>
              <p className="mt-4">{user?.description}</p>
            </div>
          </>
        )}
      </CardWrapper>
    </div>
  );
};

export default UserCard;
