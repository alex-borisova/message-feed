import { FC } from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import UserSkeleton from "../Skeletons/UserSkeleton/UserSkeleton";
import { User } from "../../types/user.types";

interface UserCardProps {
  user?: User;
}
const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className="container mx-auto max-w-7xl">
      <CardWrapper addionalStyles="p-8 md:p-0">
        {!user ? ( //TODO
          <UserSkeleton />
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
