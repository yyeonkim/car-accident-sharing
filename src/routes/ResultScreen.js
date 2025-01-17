// 작성자: kimwest00
import React from "react";
import {
  Text,
  Flex,
  Heading,
  Stack,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Modal,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { useRecoilValue } from "recoil";
import Chart from "react-apexcharts";

import CommentCards from "../components/CommentCards";
import ArrowBack from "../components/Buttons/ArrowBack";
import { resultVideoState } from "../atom";
import useSetChart from "../hooks/useSetChart";
import { MESSAGE } from "../constants/index.js";

export default function ResultScreen() {
  const resultVideo = useRecoilValue(resultVideoState);
  const { series, options } = useSetChart();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex display="column" px="2rem">
      <ArrowBack url="/user/resultList" />

      <Heading size="md" mt="2rem" mb="1rem" lineHeight="2rem">
        {MESSAGE.ANALYSIS_RESULT}
      </Heading>

      {/* 최다 과실비율 */}
      <Flex direction="column" alignItems="center" borderRadius={8} mb="2rem">
        <Text>{MESSAGE.MOST_FAULT_RATE}</Text>
        <Text fontWeight="bold" fontSize="4xl" color="red">
          {resultVideo.ratio}
        </Text>
      </Flex>

      {/* 모든 보험사 의견 */}
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        mt="2rem"
      >
        <Heading size="md" mb="1rem">
          {MESSAGE.INSURER_ANALYSISQ}
        </Heading>

        <Flex alignItems="center" onClick={onOpen}>
          <Text fontWeight="bold" fontSize="lg" mr=".5rem">
            {MESSAGE.VIEW_STATISTICS}
          </Text>
          <IoIosArrowForward />
        </Flex>
      </Flex>

      {/* 통계 */}
      <Modal blockScrollOnMount isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%" maxW="30rem" bgColor="white" pb="1rem">
          <ModalHeader size="sm">{MESSAGE.RATE_ANALYSIS}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Chart options={options} series={series} type="donut" />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Stack spacing="1rem">
        <CommentCards />
      </Stack>
    </Flex>
  );
}
