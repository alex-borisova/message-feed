import { FC } from "react";

import { CloseIcon } from "./../../assets";
import { handleHasError } from "../../store";

const ErrorAlert: FC = () => {
  const close = () => handleHasError(false);

  return (
    <div
      className="flex gap-x-4 items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 fixed bottom-5 right-2/4 translate-x-2/4"
      role="alert"
    >
      <p className="ms-3 text-sm font-medium">
        Something went wrong! Please contact the administrator.
      </p>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-red-50 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#alert-2"
        aria-label="Close"
        onClick={close}
      >
        <span className="sr-only">Close</span>
        <CloseIcon />
      </button>
    </div>
  );
};

export default ErrorAlert;
