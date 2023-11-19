// 작성자: kimwest00
import React from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Result from "../components/Result";
import ArrowBack from "../components/Buttons/ArrowBack";
import LoadingAnimation from "../components/LoadingAnimation";
import useGetResults from "../hooks/useGetResults";
import { myReports } from "../db";
import { MESSAGE } from "../constants/index.js";

export default function ResultList() {
  const { results, isLoading } = useGetResults();
  const resultCount = results.length + myReports.length;

  return (
    <Flex direction="column" mx="2rem">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <ArrowBack url="/user" />

          <Heading fontSize="xl" lineHeight="2rem" my="1rem">
            <Text fontSize="lg">김공차님</Text>
            <Flex>
              총 &nbsp;
              <Text color="blue">{resultCount}</Text>
              건의 {MESSAGE.ANALYSIS_RESULT}입니다
            </Flex>
          </Heading>

          <Stack spacing="1rem">
            {myReports.map((item) => (
              <Link to={item.id} key={item.id}>
                <Result item={item} />
              </Link>
            ))}
            {results.map((item) => (
              <Result key={item.id} item={item} />
            ))}
          </Stack>
        </>
      )}
    </Flex>
  );
}
