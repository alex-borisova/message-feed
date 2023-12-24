import React, {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { User } from "./types/user.types";
import { Message } from "./types/message.types";

interface AppContextProps {
  children: React.ReactNode;
}

interface AppContextValue {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

const defaultValue: AppContextValue = {
  user: null,
  setUser: () => {},
  messages: [],
  setMessages: () => {},
};
export const AppContext = createContext(defaultValue);

export const AppContextProvider: FC<AppContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <AppContext.Provider value={{ user, setUser, messages, setMessages }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
