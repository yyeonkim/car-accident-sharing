import { Center, Divider, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import UsearIcon from "./components/UserIcon";

export default function App() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      height="100vh"
      w="75%"
      m="0 auto"
    >
      <Link to="/user">
        <UsearIcon imgUrl="/images/driver.png" text="운전자" />
      </Link>
      <Center height="50px">
        <Divider
          orientation="vertical"
          borderColor="rgba(0,0,0,0.3)"
          h="20rem"
        />
      </Center>
      <Link to="/expert/videos">
        <UsearIcon imgUrl="/images/expert.png" text="전문가" />
      </Link>
    </Flex>
  );
}
