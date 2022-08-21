import React from "react";
import { Heading, Button, Flex, Center } from "@chakra-ui/react";
import Dropzone from "react-dropzone";
import { AiFillFileAdd } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

const onDrop = (files) => {
  // console.log(files);
};

function postInform(userId,video) {

  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    author: userId,
    video : video
  });
}


function VideoUploadPage() {
  
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      px="4rem"
      h="100vh"
    >
      <Link to="/user/resultList">
        <Center color="#3F8CFF" position="fixed" top="2rem" right="1rem">
          <IoPersonCircleSharp size="3rem" />
        </Center>
      </Link>

      <Heading fontSize="xl" mb="2rem">
        영상 업로드하기
      </Heading>
     <input type = "file"
onChange = {
  (e) => {
    let videoObj = e.currentTarget.files[0];
    // console.log(videoObj)
    let {
      name,
      size,
      type
    } = videoObj;

    size = size / 1000000
    //for not uploading the file more than 10 MB
    if (size > 10) {
      alert("please upload file less than 10 MB");
      return;
    }

    //code for only uploading the video

    type = type.split("/")[0];

    if (type != "video") {
      alert("please upload video only");
      return;
    }
  }
}/>
      <Link to="/user/complete">
        <Button
          mt="4rem"
          bgColor={"#9A9A9A"}
          color="white"
          w="15rem"
          h="4rem"
          fontSize="xl"
          fontWeight="bold"
          onClick={postInform()} >
          분석 접수
        </Button>
      </Link>
    </Flex>
  );
}

export default VideoUploadPage;
