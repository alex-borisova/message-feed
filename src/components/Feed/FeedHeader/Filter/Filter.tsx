import { FC, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContextProvider";
import { Message } from "../../../../types/message.types";

const Filter: FC = () => {
  const { messages, setMessages, user } = useContext(AppContext);

  const [filtered, setFiltered] = useState<boolean>(false);
  const [copiedArray, setCopiedArray] = useState<Message[]>([]);
  const handleFiltered = () => {
    if (!filtered) {
      setCopiedArray(messages);
    }
    setFiltered(!filtered);
  };

  const filteredClassess =
    filtered &&
    "text-blue-400 hover:text-white border-blue-400 hover:bg-blue-400";
  const notFilteredClassess =
    !filtered && "text-slate-500 border-[#eff6ff] hover:border-slate-300 ";

  //we copy messages to copiedArray becauce we don't have a server where we can make a request with query parameters for filtering,
  //for example - fetch("/api/messages?search=user.id:1")
  //so my logic is copy the current messages (if you create a new message then it will be copied along with it) when the button is clicked,
  //then we filter the messages and if we want to remove the filter, then we set the copied messages

  //if we had a server then it would look like this
  // useEffect(() => {
  //   if (filtered) {
  //     fetch("/api/messages?search=user.id:1").then((res) => setMessages(res)).catch(...);
  //   } else {
  //     fetch("/api/messages").then((res) => setMessages(res)).catch(...);
  //   }
  // }, [filtered]);

  useEffect(() => {
    if (filtered) {
      const filteredMessages = messages.filter(
        (item) => item.author.id === user?.id
      );
      setMessages(filteredMessages);
    } else {
      setMessages(copiedArray);
    }
    /* eslint-disable-next-line */
  }, [filtered]);

  return (
    <button
      type="button"
      onClick={handleFiltered}
      className={`${filteredClassess} ${notFilteredClassess} border rounded-full text-base font-medium px-3 py-1.5 text-center`}
    >
      My messages
    </button>
  );
};

export default Filter;
