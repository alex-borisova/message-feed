import { FC } from "react";
import NewMesssage from "./NewMesssage/NewMesssage";
import Filter from "./Filter/Filter";

const FeedHeader: FC = () => {
  return (
    <div className="flex justify-between items-center	mb-5">
      <h1 className="font-bold text-sky-700 text-4xl">My Feed</h1>
      <div className="flex justify-between gap-x-5">
        <Filter />
        <NewMesssage />
      </div>
    </div>
  );
};

export default FeedHeader;
