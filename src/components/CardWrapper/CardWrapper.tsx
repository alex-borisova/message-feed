import { FC } from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  addionalStyles?: string;
}

const CardWrapper: FC<CardWrapperProps> = ({ children, addionalStyles }) => {
  return (
    <div className={`bg-white md:flex rounded-md shadow-lg ${addionalStyles}`}>
      {children}
    </div>
  );
};

export default CardWrapper;
