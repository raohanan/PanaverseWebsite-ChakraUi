import { Box, Button, Flex, Hide, HStack, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function FirstContainer() {
  return (
    <Box display={{lg:"flex"}} my={{base:"20",md:"20",lg:"0"}} mx={{base:"8",md:"12",lg:"20"}} bg="#fff">
      <Box mt={{lg:"24"}} maxW={{base:"100%", md:"100%", lg:"50%"}}>
        <Text fontSize={{ base: '24px', md: '32px', lg: '44px' }} fontWeight="400">
          Take your Virtual Field Trips into the Metaverse with Panaverse DAO
        </Text>
        <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} my={"4"}>
          One year Panavers DAO earn while you learn program. Consolidating 'Web
          3.0 & Metaverse, Generative AI, Artificial Inteligence, Internet of
          things, Blockchain and Cloud Natives' Technologies with Panavers DAO.
        </Text>
        <Link href="http://piaic.org/" target={"_blank"}>
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
        </Link>
      </Box>
      <Box mr={{base:"auto",md:"auto",lg:"0"}}>
        <Image
          src="/Images/googleSite.gif"
          height={600}
          width={{base:700 ,md: 800,lg:600 }}
          alt="GoogleSitePic"
        />
      </Box>
    </Box>
  );
}
