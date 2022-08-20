import { Box, Center, Circle, Heading, Stack } from "@chakra-ui/react";
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
    <Center pt="6rem">
      <Stack>
        <Heading size="lg">3건의 영상이</Heading>
        <Heading size="lg">전문가님께 도착했어요</Heading>
        {videos.map((video) => (
          <Box
            key={video.id}
            position="relative"
            w={304}
            h={171}
            backgroundImage={video.thumbnail}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="304px 171px"
            mb="2rem"
            borderRadius={20}
          >
            <Box
              w={304}
              h={171}
              position="absolute"
              backgroundColor="rgba(0, 0, 0, 0.5)"
              borderRadius={20}
            ></Box>
            <Circle size="4rem" bg="D9D9D9" color="white" zIndex={10}>
              <BsFillPlayFill />
            </Circle>
          </Box>
        ))}
      </Stack>
    </Center>
  );
}
