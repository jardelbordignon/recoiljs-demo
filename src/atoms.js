import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: []
});

export const userIdAtom = atom({
  key: "userId",
  default: 1
});
