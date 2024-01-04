import { atom } from "nanostores";

export const $hasError = atom<boolean>(false);

export const handleHasError = (value: boolean) => {
  $hasError.set(value);
};
