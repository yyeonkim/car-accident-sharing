import { cookieStorageManager, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

import { videos } from "../db";

export default function OpinionArea() {
  const [opinion, setOpinion] = useState("");

  const { register, watch, handleSubmit } = useForm();
  const { videoId } = useParams();

  const onValid = (data) => {
    setOpinion("");
    // 영상 분석 완료로 바꾸기
  };

  return (
    <Stack spacing="2rem">
      <Heading size="md">의견</Heading>
      <form onSubmit={handleSubmit(onValid)}>
        <textarea
          style={inputStyle}
          {...register("opinion", { required: true })}
        />
        <Link to="/expert/videos">
          <button
            style={{
              ...buttonStyle,
              backgroundColor: watch("opinion") ? "#3F8CFF" : "gray",
            }}
          >
            완료
          </button>
        </Link>
      </form>
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
