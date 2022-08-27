import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import VideoList from "../components/VideoList";
import { videos } from "../db";

export default function VideoListPage() {
  return (
    <Center py="2rem">
      <Flex direction="column" justifyContent="center">
        <Heading size="md" mb="2rem" lineHeight="2rem">
          <Text display="flex">
            <Text color="blue">{videos.length}</Text> 건의 영상이
          </Text>
          전문가님께 도착했어요!
        </Heading>
        <VideoList />
      </Flex>
    </Center>
  );
}
