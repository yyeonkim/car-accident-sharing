import { Box, Center, Circle, Flex, Heading, Stack } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";

const videos = [
  {
    id: "32874824",
    thumbnail:
      "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "234",
    thumbnail:
      "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "43434",
    thumbnail:
      "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "234432",
    thumbnail:
      "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

export default function App() {
  return (
    <Center py="6rem">
      <Flex direction="column" justifyContent="center">
        <Heading size="md">3건의 영상이</Heading>
        <Heading size="md" mb="3rem">
          전문가님께 도착했어요!
        </Heading>
        <Stack spacing="2rem">
          {videos.map((video) => (
            <Center
              key={video.id}
              position="relative"
              w={320}
              h={180}
              backgroundImage={video.thumbnail}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="320px 180px"
              borderRadius={20}
            >
              <Box
                w={320}
                h={180}
                position="absolute"
                backgroundColor="rgba(0, 0, 0, 0.5)"
                borderRadius={20}
              ></Box>
              <Circle
                position="absolute"
                size="2rem"
                bgColor="rgba(255,255,255,0.5)"
                color="white"
                zIndex={10}
                textAlign="center"
              >
                <BsFillPlayFill size={20} />
              </Circle>
            </Center>
          ))}
        </Stack>
      </Flex>
    </Center>
  );
}
