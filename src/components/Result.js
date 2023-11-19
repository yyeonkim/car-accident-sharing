import { Box, Center, Flex, Text, Image } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { resultVideoState } from "../atom";
import { MESSAGE } from "../constants/index.js";

export default function Result({ item }) {
  const setResultVideo = useSetRecoilState(resultVideoState);
  const navigate = useNavigate();

  const onClick = () => {
    setResultVideo(item);
    navigate(`/user/resultList/${item.id}`);
  };

  return (
    <Flex
      shadow="base"
      borderRadius=".5rem"
      justifyContent="space-between"
      alignItems="center"
      p="1rem"
      onClick={onClick}
    >
      <Flex alignItems="center">
        <Image
          borderRadius={5}
          w="8rem"
          src={item.thumbnail}
          alt="교통 사고"
          mr="1rem"
        />

        <Box fontSize="sm" lineHeight="1.5rem">
          <Text color="gray" fontSize="xs">
            {item.createdAt}
          </Text>
          <Flex>
            {MESSAGE.PREDICTION_RATIO} &nbsp;
            <Text fontWeight="bold" color="red">
              {item.ratio}
            </Text>
          </Flex>
          <Text>{Object.keys(item.comments).length}명 참여</Text>
        </Box>
      </Flex>

      <Center color="gray">
        <IoIosArrowForward />
      </Center>
    </Flex>
  );
}
