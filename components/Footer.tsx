import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Container maxW={"100%"} bg={"red.100"}>
      <HStack py={"6"}>
        <Heading pl={"16"} color={"grey"}>
          Panaverse
        </Heading>
        <HStack color={"grey"} px={"10"}>
          <Text pr={"6"}>About Panaverse</Text>
          <Text pr={"6"}>Help</Text>
          <Text pr={"6"}>Privacy and Terms</Text>
          <Text pr={"36"}>© 2023 all rights reserved to Panaverse</Text>
          <Text>Made By: Abdul Hanan</Text>
        </HStack>
      </HStack>
    </Container>
  );
}
