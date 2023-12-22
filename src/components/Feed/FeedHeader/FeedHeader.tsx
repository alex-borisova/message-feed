import { FC } from "react";
import NewMesssage from "./NewMesssage/NewMesssage";

const FeedHeader: FC = () => {
  return (
    <div className="flex justify-between mb-5">
      <h1 className="font-bold text-sky-700 text-4xl">My Feed</h1>
      <NewMesssage />
    </div>
  );
};

export default FeedHeader;
