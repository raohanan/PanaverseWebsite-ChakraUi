import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function FirstContainer() {
  return (
    <Box mt="1" bg="#fff">
      <HStack px={"50px"} pt="1">
        <Box pl={"10"} w={"50%"}>
          {/* Left */}
          <Text fontSize={"44px"} fontWeight="400">
            Take your Virtual Field Trips into the Metaverse with Panaverse DAO
          </Text>
          <Text fontSize={"18px"} my={"4"}>
            One year Panavers DAO earn while you learn program. Consolidating
            'Web 3.0 & Metaverse, Generative AI, Artificial Inteligence,
            Internet of things, Blockchain and Cloud Natives' Technologies with
            Panavers DAO.
          </Text>
          <Button
            py={"6"}
            mt={"3"}
            textColor="white"
            bg="red.600"
            borderRadius="4"
            variant={"outline"}
          >
            Get Started
          </Button>
        </Box>
        <Image maxW={"600px"} mt={"1"} src="/Images/googleSite.gif" />
      </HStack>
    </Box>
  );
}
