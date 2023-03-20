import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Hide,
  HStack,
  Show,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Container maxW={"100%"} bg={"red.100"}>
      <HStack mx={{base:"8",md:"12",lg:"20"}} spacing={10} py={"6"}>
        <Heading color={"grey"}>Panaverse</Heading>
        <HStack spacing={10} color={"grey"}>
          <Hide below="md">
            <Text>About Panaverse</Text>
            <Text>Help</Text>

            <Text>Privacy and Terms</Text>
          </Hide>
          <Text>© 2023 all rights reserved to Panaverse</Text>
          <Show above="md">
              <Text>Made By: Abdul Hanan</Text>
          </Show>
        </HStack>
      </HStack>
    </Container>
  );
}
