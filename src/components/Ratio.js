import { Stack, Heading } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { leftRatio, rightRatio } from "../atom";
import RatioSlider from "./RatioSlider";

export default function Ratio() {
  const left = useRecoilValue(leftRatio);
  const right = useRecoilValue(rightRatio);

  return (
    <Stack spacing="2rem" mb="3rem">
      <Heading size="md">과실 비율</Heading>
      <Heading textAlign="center" size="lg">
        {left} vs {right}
      </Heading>
      <RatioSlider />
    </Stack>
  );
}
