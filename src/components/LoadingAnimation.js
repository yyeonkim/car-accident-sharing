import { Spinner, Center } from "@chakra-ui/react";

export default function LoadingAnimation() {
  return (
    <Center
      h="100vh"
      w="100vw"
      zIndex={10}
      position="fixed"
      bgColor="rgba(0,0,0,0.5)"
    >
      <Spinner color="blue" size="lg" />
    </Center>
  );
}
