import React from "react";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Result from "../components/Result";

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
    <Flex direction="column">
      <Heading fontSize="2xl" lineHeight="2.5rem" m="2rem" mt="4rem">
        총 3건의
        <br />
        김열정님의 분석 결과 입니다
      </Heading>
      <Stack spacing="2rem" px="2rem">
        {itemList.map((item) => (
          <Link to="detail" key={item.createdAt}>
            <Result item={item} />
          </Link>
        ))}
      </Stack>
    </Flex>
  );
}
