import { Flex, Heading, Text } from "@chakra-ui/react";

import VideoList from "../components/VideoList";
import useFetchVideos from "../hooks/useFetchVideos";
import LoadingAnimation from "../components/LoadingAnimation";
import HomeButton from "../components/Buttons/HomeButton";
import { MESSAGE } from "../constants/index.js";

export default function VideoListPage() {
  const { videos, isLoading } = useFetchVideos();

  return (
    <Flex py="2rem" direction="column" alignItems="center">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Flex w="100%" justifyContent="flex-start" pl="2rem" mb="1rem">
            <HomeButton />
          </Flex>

          <Heading size="md" mb="2rem" lineHeight="2rem">
            {videos.length > 0 ? (
              <Flex direction="column" alignItems="center">
                <Flex alignItems="center">
                  <Text color="blue">{videos.length}</Text>
                  <Text>건의 영상이</Text>
                </Flex>
                <Text>전문가님께 도착했어요!</Text>
              </Flex>
            ) : (
              MESSAGE.EMPTY_VIDEO
            )}
          </Heading>
          <VideoList videos={videos} />
        </>
      )}
    </Flex>
  );
}
