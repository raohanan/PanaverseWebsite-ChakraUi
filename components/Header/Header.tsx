"use client";
import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Hide,
  HStack,
  Image,
  Input,
  Link,
  Show,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SearchIcon } from "@chakra-ui/icons";
import { BiMicrophone } from "react-icons/bi";
import Burger from "./Burger";



export default function Header() {
  return (
    <Box
      display={"flex"}
      boxShadow="md"
      bg="white"
      position={"sticky"}
      top="0"
      zIndex={1}
    >
      <Image
        my={5}
        mx={{ base: "5", md: "8", lg: "16" }}
        src="/Images/logo.png"
        height="12"
        width="28"
      />
      <Hide below="md">
        <HStack spacing={10}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </HStack>
      </Hide>
      <Show below="md">
        <HStack ml={{ base: "auto" }} mr={{ base: "5" }}>
          <Button>
            <Burger />
          </Button>
        </HStack>
      </Show>
      <Hide below="sm">
        <Box flex={1} mx={10} my={"auto"} display={"flex"}>
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
            <SearchIcon />
          </Button>
          <Hide below="md">
            <Box ml={6}>
              <Button borderRadius="100">
                <BiMicrophone />
              </Button>
            </Box>
          </Hide>
        </Box>
      </Hide>
      <Hide below="sm">
        <HStack spacing={10}>
          <Link href="http://piaic.org/" target={"_blank"}>
            <Button
              p={6}
              mr={10}
              textColor="white"
              bg="red.600"
              borderRadius="4"
              variant={"outline"}
            >
              Sign In
            </Button>
          </Link>
        </HStack>
      </Hide>
    </Box>
  );
}
