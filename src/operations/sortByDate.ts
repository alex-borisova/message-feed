import { Message } from "../types/message.types";

export const sortByDate = (array: Message[]) =>
  array.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA < dateB ? 1 : -1;
  });
