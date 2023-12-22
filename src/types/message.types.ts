import { User } from "./user.types";

export type Message = {
  id: number;
  content: string;
  author: User;
  date: string;
};
