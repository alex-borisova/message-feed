import { FC } from "react";
import CardWrapper from "../../CardWrapper/CardWrapper";

const Skeleton: FC = () => {
  const SkeletonItem = (
    <div className="flex items-center justify-between pt-4">
      <div>
        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
        <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
      </div>
      <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
    </div>
  );

  return (
    <CardWrapper>
      <div
        role="status"
        className="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse md:p-6"
      >
        {[...Array(5).keys()].map((item) => SkeletonItem)}
        <span className="sr-only">Loading...</span>
      </div>
    </CardWrapper>
  );
};

export default Skeleton;
