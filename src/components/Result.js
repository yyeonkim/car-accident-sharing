import { Box, Center, Flex, Text, Image } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export default function Result({ item }) {
  return (
    <Flex
      shadow="base"
      borderWidth="1px"
      borderRadius=".5rem"
      justifyContent="space-between"
      alignItems="center"
      p="1rem"
    >
      <Flex alignItems="center">
        <Image
          borderRadius={5}
          w="8rem"
          src={`/images/${item.imgUrl}`}
          alt="교통 사고"
          mr="1rem"
        />

        <Box fontSize="sm" lineHeight="1.5rem">
          <Text color="gray" fontSize="xs">
            {item.createdAt}
          </Text>
          <Text display="flex">
            예측 비율 &nbsp;
            <Text fontWeight="bold" color="red">
              {item.ratio}
            </Text>
          </Text>
          <Text>{item.candidate}명 참여</Text>
        </Box>
      </Flex>

      <Center color="gray">
        <IoIosArrowForward />
      </Center>
    </Flex>
  );
}
