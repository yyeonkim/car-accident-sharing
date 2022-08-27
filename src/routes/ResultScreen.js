import React from "react";
import { Text, Flex, Heading, Box, Stack } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

import CommentCards from "../components/CommentCards";
import ArrowBack from "../components/ArrowBack";

function ResultScreen() {
  return (
    <Flex display="column" p="2rem" pt="3rem">
      <ArrowBack />

      <Heading size="md" my="2rem" lineHeight="2rem">
        분석결과
      </Heading>

      {/* 최다 과실비율 */}
      <Flex
        direction="column"
        alignItems="center"
        borderWidth="1px"
        borderRadius={8}
        mb="2rem"
      >
        <Heading size="sm">최다 과실비율</Heading>
        <Text fontWeight="bold" fontSize="4xl" color="red">
          7 : 3
        </Text>
      </Flex>

      {/* 모든 보험사 의견 */}
      <Box>
        <Heading size="md">보험사 분석</Heading>
        <Stack spacing="1rem">
          <CommentCards />
        </Stack>
      </Box>

      {/* 통계 보기 */}
      <Flex w="100%" justifyContent="right" alignItems="center" mt="2rem">
        <Text fontWeight="bold" fontSize="lg" mr=".5rem">
          통계 보기
        </Text>
        <IoIosArrowForward />
      </Flex>
    </Flex>
  );
}
export default ResultScreen;
