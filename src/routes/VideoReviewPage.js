import { Center, Flex } from "@chakra-ui/react";
import { collection, doc, setDoc } from "firebase/firestore";
import OpinionArea from "../components/OpinionArea";
import Ratio from "../components/Ratio";

export default function VideoReviewPage() {
  return (
    <Center>
      <Flex width="100%" direction="column" justifyContent="center">
        <video src ='https://firebasestorage.googleapis.com/v0/b/gongcha-2b0f0.appspot.com/o/video1.mp4?alt=media&token=bcfa20a6-1bec-481f-aa4f-97429565a190' controls width="100%"></video>
        <Flex direction="column" p="3rem">
          <Ratio />
          <OpinionArea />
        </Flex>
      </Flex>
    </Center>
  );
}
