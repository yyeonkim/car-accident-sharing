import { Box, Center, Circle, Stack } from "@chakra-ui/react";
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

export default function VideoList() {
  return (
    <Stack
      spacing="2rem"
      sx={{ "--video-width": "320px", " --video-height": "180px" }}
    >
      {videos.map((video) => (
        <Center
          key={video.id}
          position="relative"
          w="var(--video-width)"
          h="var(--video-height)"
          backgroundImage={video.thumbnail}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="var(--video-width) var(--video-height)"
          borderRadius={20}
        >
          <Box
            w="var(--video-width)"
            h="var(--video-height)"
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
  );
}
