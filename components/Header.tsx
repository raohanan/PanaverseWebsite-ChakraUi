"use client";
import React from "react";
import Link from "next/link";
import { Box, Button, Flex, HStack, Image, Input } from "@chakra-ui/react";
import { MoonIcon, SearchIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <Box
      as="header"
      boxShadow="md"
      bg="white"
      position={"sticky"}
      top="0"
      zIndex={1}
    >
      <Flex alignItems="Center" mx={10}>
        <Image src="/Images/logo.png" my={5} height="12" width="28"></Image>
        <HStack spacing={10} fontFamily={"heading"} mx={6} px="6">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
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
        <Link href="http://piaic.org/" target={"_blank"}>
          <Button
            textColor="white"
            bg="red.600"
            borderRadius="2"
            variant={"outline"}
            ml={10}
            py={6}
            px={4}
          >
            Go to PIAIC
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
