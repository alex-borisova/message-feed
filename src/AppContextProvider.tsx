import React, {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { User } from "./types/user.types";
import { Message } from "./types/message.types";
import ErrorAlert from "./components/ErrorAlert/ErrorAlert";

interface AppContextProps {
  children: React.ReactNode;
}

interface AppContextValue {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: AppContextValue = {
  user: null,
  setUser: () => {},
  messages: [],
  setMessages: () => {},
  setIsError: () => {},
};
export const AppContext = createContext(defaultValue);

export const AppContextProvider: FC<AppContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{ user, setUser, messages, setMessages, setIsError }}
    >
      {children}
      {isError && <ErrorAlert />}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
