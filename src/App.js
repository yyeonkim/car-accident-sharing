import { Center, Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";

export default function App() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      height="100vh"
      w="75%"
      m="0 auto"
    >
      <Stack spacing="1rem" textAlign="center">
        <Image src="driver.png" boxSize="6rem" />
        <Text fontWeight="bold" fontSize="xl">
          운전자
        </Text>
      </Stack>
      <Center height="50px">
        <Divider
          orientation="vertical"
          borderColor="rgba(0,0,0,0.3)"
          h="20rem"
        />
      </Center>
      <Stack spacing="1rem" textAlign="center">
        <Image src="expert.png" boxSize="6rem" />
        <Text fontWeight="bold" fontSize="xl">
          전문가
        </Text>
      </Stack>
    </Flex>
  );
}
