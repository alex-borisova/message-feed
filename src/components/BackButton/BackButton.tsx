import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { BackIcon } from "../../assets";

const BackButton: FC = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <button
      className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
      onClick={handleBack}
    >
      <BackIcon />
    </button>
  );
};

export default BackButton;
