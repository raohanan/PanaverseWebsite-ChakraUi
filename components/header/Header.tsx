"use client";
import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <Box boxShadow="md" bg="white">
      <Flex alignItems="Center" mx={10}>
        <Image src="/Images/logo.png" my={5} height="12" width="28"></Image>
        <HStack spacing={10} fontFamily={"heading"} mx={6} px="6">
          <Box>Home</Box>
          <Box>About</Box>
          <Box>Contact</Box>
        </HStack>
        <Input
          placeholder="Search"
          borderLeftRadius="100"
          borderRightRadius="0"
        />
        <Button
          borderLeftRadius="0"
          borderRightRadius="100"
          variant={"outline"}
        >
          {" "}
          <SearchIcon />{" "}
        </Button>
        <Button ml="8" borderRadius="100">
          {" "}
          <MoonIcon />{" "}
        </Button>
        <Button
          textColor="white"
          bg="red.600"
          borderRadius="4"
          variant={"solid"}
          ml={10}
          py={6}
          px={8}
        >
          Go to PIAIC
        </Button>
      </Flex>
    </Box>
  );
}
