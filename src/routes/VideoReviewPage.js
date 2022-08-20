import {
  Center,
  Flex,
  Heading,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Stack,
  SliderMark,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsDot } from "react-icons/bs";

const markValue = [10, 20, 30, 40, 50, 60, 70, 80, 90];

export default function VideoReviewPage() {
  const [sliderValue, setSliderValue] = useState(50);
  const [leftRatio, setLeftRatio] = useState(5);
  const [rightRatio, setRightRatio] = useState(10 - leftRatio);

  const onChange = (value) => {
    setSliderValue(value);
    setRatioByValue(value);
  };

  const setRatioByValue = (value) => {
    const units = value % 10;

    if (units <= 5) {
      setLeftRatio(parseInt(value / 10));
    } else {
      setLeftRatio(parseInt(value / 10) + 1);
    }
    setRightRatio(10 - leftRatio);
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
    <Center>
      <Flex width="100%" direction="column" justifyContent="center">
        <video controls width="100%"></video>
        <Flex direction="column" p="3rem">
          <Stack spacing="2rem" mb="3rem">
            <Heading size="md">과실 비율</Heading>
            <Heading textAlign="center" size="lg">
              {leftRatio} vs {rightRatio}
            </Heading>
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
              <SliderThumb bgColor="#9A9A9A" />
            </Slider>
          </Stack>
          <Stack spacing="2rem">
            <Heading size="md">의견</Heading>
          </Stack>
        </Flex>
      </Flex>
    </Center>
  );
}
