import React, { useState, useEffect } from "react";
import {
  Heading,
  Button,
  Flex,
  Center,
  Input,
  Text,
  Box,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { AiFillFileAdd } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytes } from "firebase/storage";

import { storage } from "../firebase.js";

function VideoUploadPage() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "video/*": [],
    },
  });

  const [file, setFile] = useState(acceptedFiles);

  useEffect(() => {
    setFile(acceptedFiles);
  }, [acceptedFiles]);

  const submitVideo = () => {
    const videoRef = ref(storage, `${Date.now()}`);

    uploadBytes(videoRef, file[0]).then((snapshot) =>
      console.log("Upload Video")
    );
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      px="3rem"
      h="100vh"
      position="relative"
    >
      <Link to="/user/resultList">
        <Center color="#3F8CFF" position="absolute" top="2rem" right="1rem">
          <IoPersonCircleSharp size="3rem" />
        </Center>
      </Link>

      <Box mt="2rem" textAlign="center" fontWeight="bold" mb="2rem">
        <Text>전문가에게 분석받고 싶은</Text>
        <Text fontSize="lg">교통사고 영상을 올려주세요</Text>
      </Box>

      <Flex
        _hover={{ cursor: "pointer" }}
        bgColor="#f5f6fa"
        width="100%"
        height="50vh"
        borderRadius="2rem"
        border="1px solid light gray"
        direction="column"
        alignItems="center"
        justifyContent="center"
        px="1rem"
        color="blue"
        {...getRootProps()}
      >
        <Input {...getInputProps()} />
        {file[0] ? (
          <CheckCircleIcon color="#2ecc71" w="6rem" h="6rem" />
        ) : (
          <AiFillFileAdd color="#3F8CFF" size="8rem" />
        )}
        {file[0] && (
          <Text textAlign="center" fontSize="sm" mt="1rem">
            {file[0].name}
          </Text>
        )}
      </Flex>

      <Link to="/user/complete">
        <Button
          mt="4rem"
          bgColor={file[0] ? "blue" : "gray"}
          disabled={file[0] ? false : true}
          color="white"
          w="15rem"
          h="4rem"
          fontSize="xl"
          fontWeight="bold"
          onClick={submitVideo}
        >
          분석 접수
        </Button>
      </Link>
    </Flex>
  );
}

export default VideoUploadPage;
