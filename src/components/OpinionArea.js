import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogFooter,
  Heading,
  Stack,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

import { videos } from "../db";

export default function OpinionArea() {
  const [opinion, setOpinion] = useState("");

  const { register, watch, handleSubmit } = useForm();
  const { videoId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const completeRef = React.useRef();

  const onValid = (data) => {
    setOpinion("");
    // DB 수정 (Loading.....)
    onOpen();
  };

  return (
    <Stack spacing="2rem">
      <Heading size="md">의견</Heading>
      <form onSubmit={handleSubmit(onValid)}>
        <textarea
          style={inputStyle}
          {...register("opinion", { required: true })}
        />
        <button
          style={{
            ...buttonStyle,
            backgroundColor: watch("opinion") ? "#3F8CFF" : "gray",
          }}
        >
          완료
        </button>
      </form>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={completeRef}
        onClose={onClose}
        bgColor="white"
      >
        <AlertDialogOverlay>
          <AlertDialogContent w="80%" bgColor="white">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              등록되었습니다
            </AlertDialogHeader>

            <AlertDialogFooter>
              <Link to="/expert/videos">
                <Button bgColor="#3F8CFF" color="white" ref={completeRef}>
                  확인
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Stack>
  );
}

const inputStyle = {
  height: "15rem",
  marginBottom: "2rem",
  width: "100%",
  backgroundColor: "white",
  borderRadius: "5px",
  border: "1px solid gray",
};

const buttonStyle = {
  width: "100%",
  height: "4rem",
  color: "white",
  borderRadius: "10px",
  fontSize: "1.2rem",
  fontWeight: "bold",
};
