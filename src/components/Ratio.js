import { Stack, Heading } from "@chakra-ui/react";
import { useState } from "react";

import RatioSlider from "./RatioSlider";

export default function Ratio() {
  const [leftRatio, setLeftRatio] = useState(5);
  const [rightRatio, setRightRatio] = useState(10 - leftRatio);

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
