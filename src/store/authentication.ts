import { atom } from "nanostores";

import { User } from "../types/user.types";
import { defaultUser } from "./user";

export const $loggedUser = atom<User>(defaultUser);

export const loginUser = (user: User) => {
  $loggedUser.set(user);
};
