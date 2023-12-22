import { FC, useState } from "react";
import AddIcon from "./../../../../assets/AddIcon.svg?react";

const NewMesssage: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const maxLength = 200;
  const [message, setMessage] = useState<string>("");
  const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleCancel = () => {
    handleOpenModal();
    setMessage("");
  };

  return (
    <>
      <button
        className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
        onClick={handleOpenModal}
      >
        <AddIcon />
        New
      </button>
      {openModal && (
        <div
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full bg-[#607d8b54]"
        >
          <form className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-sky-700">
                  New Message
                </h3>
              </div>
              <div className="p-4 md:p-5">
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none"
                  placeholder="Write your thoughts here..."
                  value={message}
                  onChange={handleMessage}
                  maxLength={maxLength}
                />
                <p className="mt-1 text-xs text-slate-400 text-end">
                  ({message.length}/{maxLength} characters)
                </p>
              </div>
              <div className="flex items-center gap-x-4 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-400 disabled:bg-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center shadow-sm"
                  disabled={message.length < 1}
                >
                  Send
                </button>
                <button
                  data-modal-hide="default-modal"
                  type="reset"
                  onClick={handleCancel}
                  className="text-gray-500 bg-white hover:bg-gray-100 font-medium border border-gray-200 hover:text-gray-600 rounded-md text-sm px-5 py-2.5 text-center shadow-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default NewMesssage;
