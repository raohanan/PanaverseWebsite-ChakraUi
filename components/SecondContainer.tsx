import { Box, Hide, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function SecondContainer() {
  return (
    <Box bg={"#fff"} mx={{base:"8",md:"12",lg:"20"}}>
      <HStack>
        <Hide below="lg">
          <Image px={"10"} w={"50%"} h="auto" src="/Images/googleSite2.png" />
        </Hide>
        <Box>
          <Text my={{base:"5"}} textColor={"red.600"} mx={{base:"0",md:"0",lg:"10"}}>
            GROW YOUR SKILLS
          </Text>
          <Text my={{base:"5"}} fontSize={{ base: '24px', md: '32px', lg: '40px' }} fontWeight="400">
            Learn how to use Metaverse tools to their full potential
          </Text>
          <Text my={{base:"5"}} fontSize={{ base: '14px', md: '16px', lg: '18px' }}>
            Get the know-how you need to find success, and earn Metaverse
            certifications to showcase your expertise.
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
