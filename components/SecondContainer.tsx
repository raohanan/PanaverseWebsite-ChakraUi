import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function SecondContainer() {
  return (
    <Box bg={"#fff"}>
      <HStack px={"50px"}>
        <Image px={"10"} w={"50%"} h="auto" src="/Images/googleSite2.png" />
        <Box>
          <Text textColor={"red.600"} mx={"10"}>GROW YOUR SKILLS</Text>
          <Text m={"10"} fontSize={"40px"} fontWeight="400">
            Learn how to use Metaverse tools to their full potential
          </Text>
          <Text mx={"10"} fontSize={"18px"}>
            Get the know-how you need to find success, and earn Metaverse
            certifications to showcase your expertise.
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
