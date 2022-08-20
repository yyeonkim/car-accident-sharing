import { atom, selector } from "recoil";

export const leftRatio = atom({
  key: "leftRatio",
  default: 5,
});

export const rightRatio = selector({
  key: "rightRatio",
  get: ({ get }) => {
    const left = get(leftRatio);

    return 10 - left;
  },
});
