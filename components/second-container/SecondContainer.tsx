import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function SecondContainer() {
  return (
    <Box >
      <HStack px={"50px"}>
        <Image w={"50%"} h="auto" src="/Images/googleSite2.png" />
        <Box>
            <Text>Grow Your Skills</Text>
            <Text fontSize={"44px"} fontWeight="300">
            Learn how to use Metaverse tools to their full potential
            </Text>
            <Text mt={"5"} fontSize={"18px"}>
            Get the know-how you need to find success, and earn Google product certifications to showcase your expertise.
            </Text>
        </Box>
      </HStack>
    </Box>
  );
}
