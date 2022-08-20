import { Box, Center, Flex, Text, Image } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export default function Result({ item }) {
  return (
    <Box shadow="md" borderWidth="1px" borderRadius=".5rem">
      <Flex justifyContent="space-between" alignItems="center" m={4}>
        <Flex alignItems="center">
          <Image w="10rem" src={"../" + item.imgUrl} alt="Company" mr="1rem" />
          <Box fontSize="sm" lineHeight="1.5rem">
            <Text>{item.createdAt}</Text>
            <Text>예측 비율 {item.ratio}</Text>
            <Text>{item.candidate}명 참여</Text>
          </Box>
        </Flex>
        <Center color="#9A9A9A">
          <IoIosArrowForward />
        </Center>
      </Flex>
    </Box>
  );
}
