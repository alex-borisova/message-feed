import { FC } from "react";
import NewMesssage from "./NewMesssage/NewMesssage";

interface FeedProps {
  name: string;
  withActionButton?: boolean;
}

const FeedHeader: FC<FeedProps> = ({ name, withActionButton }) => {
  return (
    <div className="flex justify-between items-center	mb-5">
      <h1 className="font-bold text-sky-700 text-4xl">{name}</h1>
      {withActionButton && (
        <div className="flex justify-between gap-x-5">
          <NewMesssage />
        </div>
      )}
    </div>
  );
};

export default FeedHeader;
