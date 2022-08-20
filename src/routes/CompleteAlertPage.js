import { Button, Flex, Text, Heading } from "@chakra-ui/react";

export default function CompleteAlertPage() {
  return (
    <Flex>
      <Heading>접수되었습니다.</Heading>
      <Text>분석이 완료되는 대로 알려드리겠습니다.</Text>
      <Button>확인</Button>
    </Flex>
  );
}
