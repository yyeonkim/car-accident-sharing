import { Heading, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

import { leftRatioState, rightRatioState } from "../atom";
import ReviewAlertDialog from "./ReviewAlertDialog";
import { db } from "../firebase";

export default function OpinionArea() {
  const leftRatio = useRecoilValue(leftRatioState);
  const rightRatio = useRecoilValue(rightRatioState);
  const { videoId } = useParams();

  const { register, watch, handleSubmit } = useForm();
  const control = useDisclosure();
  const completeRef = React.useRef();

  const onValid = async (data) => {
    const docRef = doc(db, "videos", videoId);
    const docSnap = await getDoc(docRef);

    await setDoc(doc(db, "videos", videoId), {
      ...docSnap.data(),
      ratio: `${leftRatio} : ${rightRatio}`,
      comments: {
        ...docSnap.data().comments,
        meritz: {
          ratio: `${leftRatio} : ${rightRatio}`,
          comment: data.opinion,
        },
      },
    });

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
