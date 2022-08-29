import React from "react";
import { Center } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <Link to="/">
      <Center color="#3F8CFF">
        <AiFillHome size="1.5rem" />
      </Center>
    </Link>
  );
}
