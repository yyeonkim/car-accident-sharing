import { Button, Flex, Text, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CompleteAlertPage() {
  return (
    <Flex direction="column" px="3rem" h="100vh" justifyContent="space-between">
      <Box>
        <Heading mt="10rem" mb="1rem">
          접수되었습니다.
        </Heading>
        <Text>분석이 완료되는 대로 알려드리겠습니다.</Text>
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
          확인
        </Button>
      </Link>
    </Flex>
  );
}
