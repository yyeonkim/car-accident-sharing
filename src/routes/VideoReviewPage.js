import {
  background,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Ratio from "../components/Ratio";

export default function VideoReviewPage() {
  const [opinion, setOpinion] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data) => console.log(errors);

  return (
    <Center>
      <Flex width="100%" direction="column" justifyContent="center">
        <video controls width="100%"></video>
        <Flex direction="column" p="3rem">
          <Ratio />
          <Stack spacing="2rem">
            <Heading size="md">의견</Heading>
            <form onSubmit={handleSubmit(onValid)}>
              <input
                style={inputStyle}
                {...register("opinion", { required: true })}
              />
              <button style={buttonStyle}>완료</button>
            </form>
          </Stack>
        </Flex>
      </Flex>
    </Center>
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
  backgroundColor: "gray",
  borderRadius: "10px",
  color: "white",
  fontSize: "1.2rem",
  fontWeight: "bold",
};
