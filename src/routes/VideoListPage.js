import { Center, Flex, Heading } from "@chakra-ui/react";

import VideoList from "../components/VideoList";
import { videos } from "../db";

export default function VideoListPage() {
  return (
    <Center py="6rem">
      <Flex direction="column" justifyContent="center">
        <Heading size="md">{videos.length}건의 영상이</Heading>
        <Heading size="md" mb="3rem">
          전문가님께 도착했어요!
        </Heading>
        <VideoList />
      </Flex>
    </Center>
  );
}
