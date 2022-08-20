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
  return (
    <Center>
      <Flex width="100%" direction="column" justifyContent="center">
        <video controls width="100%"></video>
        <Flex direction="column" p="3rem">
          <Stack spacing="2rem" mb="3rem">
            <Heading size="md">과실 비율</Heading>
            <Slider
              onChange={onChange}
              aria-label="radio"
              defaultValue={50}
              onChangeEnd={onChangeEnd}
            >
              <SliderTrack bgColor="gray">
                <SliderFilledTrack bgColor="transparent" />
              </SliderTrack>
              {markValue.map((value) => (
                <SliderMark ml="-2.5" mt="-2.5" key={value} value={value}>
                  <BsDot size="25px" />
                </SliderMark>
              ))}
              <SliderThumb bgColor="#3F8CFF" />
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
