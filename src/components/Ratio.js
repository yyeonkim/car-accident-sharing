import { Stack, Heading } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { leftRatioState, rightRatioState } from "../atom";
import RatioSlider from "./RatioSlider";

export default function Ratio() {
  const leftRatio = useRecoilValue(leftRatioState);
  const rightRatio = useRecoilValue(rightRatioState);

  return (
    <Stack spacing="2rem" mb="3rem">
      <Heading size="md">과실 비율</Heading>
      <Heading textAlign="center" size="lg">
        {leftRatio} vs {rightRatio}
      </Heading>
      <RatioSlider />
    </Stack>
  );
}
