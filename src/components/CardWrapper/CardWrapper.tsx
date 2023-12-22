import { FC } from "react";

interface CardWrapperProps {
  children: React.ReactNode;
}

const CardWrapper: FC<CardWrapperProps> = ({ children }) => {
  return (
    <div className="bg-white md:flex rounded-md p-8 md:p-0 shadow-lg">
      {children}
    </div>
  );
};

export default CardWrapper;
