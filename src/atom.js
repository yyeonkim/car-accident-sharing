import { atom, selector } from "recoil";

export const leftRatio = atom({
  ket: "leftRatio",
  default: 5,
});

export const rightRatio = selector({
  ket: "rightRatio",
  get: ({ get }) => {
    const left = get(leftRatio);

    return 10 - left;
  },
});
