import { Button, Flex, Text, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MESSAGE } from "../constants/index.js";

export default function CompleteAlertPage() {
  return (
    <Flex direction="column" px="3rem" h="100vh" justifyContent="space-between">
      <Box>
        <Heading mt="10rem" mb="1rem">
          {MESSAGE.RECEIVED_TITLE}
        </Heading>
        <Text> {MESSAGE.RECEIVED_DETAIL}</Text>
      </Box>
      <Link to="/user">
        <Button
          bgColor="#3F8CFF"
          fontSize="xl"
          color="white"
          h="4rem"
          w="100%"
          mb="5rem"
        >
          {MESSAGE.CONFIRM}
        </Button>
      </Link>
    </Flex>
  );
}
