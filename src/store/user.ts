import { atom } from "nanostores";

import { User } from "../types/user.types";

export const defaultUser = {
  id: 0,
  name: "",
  surname: "",
  email: "",
  description: "",
  avatar: "",
};

export const $user = atom<User>(defaultUser);

export const setUser = (user: User) => {
  $user.set(user);
};
