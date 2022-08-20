import { Center, Flex, Heading, Stack } from "@chakra-ui/react";

import Ratio from "../components/Ratio";

export default function VideoReviewPage() {
  return (
    <Center>
      <Flex width="100%" direction="column" justifyContent="center">
        <video controls width="100%"></video>
        <Flex direction="column" p="3rem">
          <Ratio />
          <Stack spacing="2rem">
            <Heading size="md">의견</Heading>
          </Stack>
        </Flex>
      </Flex>
    </Center>
  );
}
