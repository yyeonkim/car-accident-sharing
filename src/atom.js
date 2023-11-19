import { atom, selector } from "recoil";

const leftRatioState = atom({
  key: "leftRatio",
  default: 5,
});

const rightRatioState = selector({
  key: "rightRatio",
  get: ({ get }) => {
    const leftRatio = get(leftRatioState);

    return 10 - leftRatio;
  },
});

const resultVideoState = atom({
  key: "resultVideo",
  default: {},
});

const resultVideoCommentsState = selector({
  key: "resultVideoComments",
  get: ({ get }) => {
    const resultVideo = get(resultVideoState);
    return resultVideo.comments ? resultVideo.comments : {};
  },
});

export {
  leftRatioState,
  rightRatioState,
  resultVideoState,
  resultVideoCommentsState,
};
