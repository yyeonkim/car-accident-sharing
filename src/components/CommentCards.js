import React from "react";
import { Image, Text, Flex, Box, Stack } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

const company = [
  {
    img: "logo_1.png",
    ratio: "3 : 7",
    comment: "제가 보았을때는 피해자분의..",
  },
  {
    img: "logo_2.png",
    ratio: "6 : 4",
    comment: "영상으로 판독해본 결과 90퍼..",
  },
  {
    img: "logo_3.png",
    ratio: "7 : 3",
    comment: "제가 보았을때는 피해자분의..",
  },
  {
    img: "logo_4.png",
    ratio: "4 : 6",
    comment: "영상으로 판독해본 결과 90퍼..",
  },
];
console.log(company);

export default function CommentCards() {
  return company.map((com) => (
    <Flex
      key={com}
      boxShadow="md"
      borderWidth="1px"
      borderRadius={8}
      p="1rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex alignItems="center">
        <Image
          mr="1rem"
          w="4rem"
          h="auto"
          src={`/public/images/${com.img}`}
          alt="infopany"
        />
        <Stack fontSize="sm">
          <Text fontWeight="bold" fontSize="lg">
            {com.ratio}
          </Text>
          <Text>{com.comment}</Text>
        </Stack>
      </Flex>
      <Box>
        <IoIosArrowForward />
      </Box>
    </Flex>
  ));
}
