import { atom } from "nanostores";
import { User } from "../types/user.types";

export const $loggedUser = atom<User | undefined>();

export const loginUser = (user: User) => {
  $loggedUser.set(user);
};
