import React, { useState, useEffect } from "react";
import { Button, Flex, Center, Input, Text, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { AiFillFileAdd } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytes } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import moment from "moment";
import { LINK, MESSAGE } from "../constants/index.js";

import { storage, db } from "../firebase.js";
import LoadingAnimation from "../components/LoadingAnimation";
import HomeButton from "../components/Buttons/HomeButton.js";

function VideoUploadPage() {
  const navigate = useNavigate();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "video/*": [],
    },
  });

  useEffect(() => {
    setFile(acceptedFiles);
  }, [acceptedFiles]);

  const [file, setFile] = useState(acceptedFiles);
  const [isLoading, setIsLoading] = useState(false);

  const submitVideo = async () => {
    const uploadedVideoName = await uploadVideo();

    try {
      await addVideoInfoToDB(uploadedVideoName);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const uploadVideo = async () => {
    setIsLoading(true);
    const videoRef = ref(storage, file[0].name);
    const {
      metadata: { name },
    } = await uploadBytes(videoRef, file[0]);

    return name;
  };

  const addVideoInfoToDB = async (name) => {
    const id = `${Date.now()}`;
    await setDoc(doc(db, "videos", id), {
      id,
      name,
      thumbnail: LINK.THUMBNAIL, // dummy data
      createdAt: moment().format("YYYY.MM.DD"),
      ratio: "",
      comments: {},
    });
    setIsLoading(false);
    navigate("/user/complete");
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
      {isLoading && <LoadingAnimation />}

      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <HomeButton />

        <Link to="/user/resultList">
          <Center color="#3F8CFF">
            <IoPersonCircleSharp size="2rem" />
          </Center>
        </Link>
      </Flex>

      <Box mt="2rem" textAlign="center" fontWeight="bold" mb="2rem">
        <Text>{MESSAGE.UPLOAD_SUBTITLE}</Text>
        <Text fontSize="lg">{MESSAGE.UPLOAD_TITLE}</Text>
      </Box>

      {/* Video Dropzone */}
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
    </Flex>
  );
}

export default VideoUploadPage;
