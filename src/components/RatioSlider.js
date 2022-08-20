import {
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  SliderMark,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsDot } from "react-icons/bs";
import { useRecoilState, useSetRecoilState } from "recoil";

import { leftRatio, rightRatio } from "../atom";

const markValue = [10, 20, 30, 40, 50, 60, 70, 80, 90];

export default function RatioSlider() {
  const [sliderValue, setSliderValue] = useState(50);
  const [left, setLeft] = useRecoilState(leftRatio);
  const setRight = useSetRecoilState(rightRatio);

  const onChange = (value) => {
    setSliderValue(value);
    showRatio(value);
  };

  const showRatio = (value) => {
    const units = value % 10;

    if (units <= 5) {
      setLeft(parseInt(value / 10));
    } else {
      setRight(parseInt(value / 10) + 1);
    }
    setRight(10 - left);
  };

  const onChangeEnd = (value) => {
    positionSliderThumb(value);
  };

  const positionSliderThumb = (value) => {
    const units = value % 10;

    if (units <= 5) {
      setSliderValue(parseInt(value / 10) * 10);
    } else {
      setSliderValue(parseInt(value / 10) * 10 + 10);
    }
  };

  return (
    <Slider
      onChange={onChange}
      value={sliderValue}
      aria-label="radio"
      defaultValue={50}
      onChangeEnd={onChangeEnd}
    >
      <SliderTrack bgColor="gray">
        <SliderFilledTrack bgColor="transparent" />
      </SliderTrack>
      {markValue.map((value) => (
        <SliderMark
          ml="-2.5"
          mt="-2.5"
          key={value}
          value={value}
          color="gray.600"
        >
          <BsDot size="25px" />
        </SliderMark>
      ))}
      <SliderThumb
        bgColor="#3F8CFF
"
      />
    </Slider>
  );
}
