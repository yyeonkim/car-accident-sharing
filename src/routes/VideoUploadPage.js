import React from "react";
import { Heading, Button, Flex, Center } from "@chakra-ui/react";
import Dropzone from "react-dropzone";
import { AiFillFileAdd } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function VideoUploadPage() {
  const onDrop = (files) => {
    // console.log(files);
  };

  const onClick = () => {};

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
      <Dropzone onDrop={onDrop} multiple={false} maxSize>
        {({ getRootProps, getInputProps }) => (
          <Center
            bgColor="gray.100"
            width="100%"
            height="50vh"
            borderRadius="2rem"
            border="1px solid light gray"
            alignItems="center"
            justifyContent="center"
            color="#3F8CFF"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <AiFillFileAdd size="8rem" />
          </Center>
        )}
      </Dropzone>
      <Link to="user/complete">
        <Button
          mt="4rem"
          bgColor={"#9A9A9A"}
          color="white"
          w="15rem"
          h="4rem"
          fontSize="lg"
          fontWeight="bold"
          onClick={onClick}
        >
          분석 접수
        </Button>
      </Link>
    </Flex>
  );
}

export default VideoUploadPage;
