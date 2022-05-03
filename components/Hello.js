import React from "react";
import { Flex, useColorModeValue, Heading } from "@chakra-ui/react";


function Hello() {
  const boxBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex direction="column" background={boxBackground} p={100} rounded={6}>
      <Heading mb={6}>Hello there 👋</Heading>
    </Flex>
  );
}

export default Hello;
