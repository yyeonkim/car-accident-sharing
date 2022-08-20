import { Center, Flex } from "@chakra-ui/react";

import OpinionArea from "../components/OpinionArea";
import Ratio from "../components/Ratio";

export default function VideoReviewPage() {
  return (
    <Center>
      <Flex width="100%" direction="column" justifyContent="center">
        <video controls width="100%"></video>
        <Flex direction="column" p="3rem">
          <Ratio />
          <OpinionArea />
        </Flex>
      </Flex>
    </Center>
  );
}
