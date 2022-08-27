import React from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Result from "../components/Result";
import ArrowBack from "../components/ArrowBack";

const itemList = [
  {
    imgUrl: "acc.png",
    createdAt: "2022.7.12",
    ratio: "7 : 3",
    candidate: 5,
  },
  {
    imgUrl: "acc.png",
    createdAt: "2022.5.21",
    ratio: "8 : 2",
    candidate: 4,
  },
  {
    imgUrl: "acc.png",
    createdAt: "2022.6.2",
    ratio: "3 : 7",
    candidate: 10,
  },
];

export default function ResultList() {
  return (
    <Flex direction="column" mx="2rem">
      <ArrowBack />

      <Heading fontSize="xl" lineHeight="2rem" my="1rem">
        <Text fontSize="lg">김공차님</Text>
        <Text display="flex">
          총 &nbsp;<Text color="blue">3</Text>건의 분석 결과 입니다.
        </Text>
      </Heading>

      <Stack spacing="1rem">
        {itemList.map((item) => (
          <Link to="detail" key={item.createdAt}>
            <Result item={item} />
          </Link>
        ))}
      </Stack>
    </Flex>
  );
}
