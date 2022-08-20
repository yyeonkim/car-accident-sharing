import React from "react";
import { Text, Flex, Heading, Box, Stack } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

import CommentCards from "../components/CommentCards";

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

function ResultScreen() {
  return (
    <Flex display="column" p="2rem" pt="3rem">
      <Heading mb="2rem" fontSize="2xl" lineHeight="2rem">
        김열정님의
        <br />
        분석결과 입니다
      </Heading>
      <Box p="1rem" boxShadow="md" borderWidth="1px" borderRadius={8} mb="2rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Heading size="md">과실비율</Heading>
            <Text display="flex" alignItems="center">
              <Text fontWeight="bold" fontSize="4xl">
                7 : 3 &nbsp;
              </Text>
              으로 분석됩니다
            </Text>
          </Box>
          <IoIosArrowForward />
        </Flex>
      </Box>

      <Box>
        <Heading size="md">보험사 분석</Heading>
        <Stack spacing="1rem">
          <CommentCards />
        </Stack>

        <Flex w="100%" justifyContent="right" alignItems="center" mt="2rem">
          <Text fontWeight="bold" fontSize="lg" mr=".5rem">
            보험사 통계 더보기
          </Text>
          <IoIosArrowForward />
        </Flex>
      </Box>
      {/* </SectionCard>  */}
    </Flex>
  );
}
export default ResultScreen;
