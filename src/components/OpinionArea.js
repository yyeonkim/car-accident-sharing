import { Heading, Stack, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { videos } from "../db";
import ReviewAlertDialog from "./ReviewAlertDialog";

export default function OpinionArea() {
  const [opinion, setOpinion] = useState("");

  const { register, watch, handleSubmit } = useForm();
  const { videoId } = useParams();
  const control = useDisclosure();
  const completeRef = React.useRef();

  const onValid = (data) => {
    setOpinion("");
    // DB 수정 (Loading.....)
    control.onOpen();
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
          disabled={watch("opinion") ? false : true}
        >
          완료
        </button>
      </form>

      <ReviewAlertDialog ref={completeRef} {...control} />
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
