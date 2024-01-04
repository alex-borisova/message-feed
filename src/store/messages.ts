import { atom } from "nanostores";
import { Message } from "../types/message.types";

export const $messagesStore = atom<Message[]>([]);
export const $userMessagesStore = atom<Message[] | undefined>();

export const setMessages = (messages: Message | Message[]) => {
  if (Array.isArray(messages)) {
    return $messagesStore.set(messages);
  }
  return $messagesStore.set([messages, ...$messagesStore.get()]);
};

export const setUserMessages = (userMessages: Message[] | undefined) => {
  $userMessagesStore.set(userMessages);
};
