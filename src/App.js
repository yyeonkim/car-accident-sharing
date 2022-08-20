import { Center, Flex, Heading } from "@chakra-ui/react";

import VideoList from "./components/VideoList";

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
        <VideoList />
      </Flex>
    </Center>
  );
}
