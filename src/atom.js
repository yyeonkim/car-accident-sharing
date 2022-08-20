import { atom, selector } from "recoil";

export const leftRatio = atom({
  ket: "leftRatio",
  default: 5,
});

export const rightRatio = selector({
  ket: "rightRatio",
  get: ({ get }) => {
    const leftRatio = get(leftRatio);

    return 10 - leftRatio;
  },
});
