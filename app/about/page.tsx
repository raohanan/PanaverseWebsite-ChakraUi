"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <Box textAlign={"center"}>
        <Box>
          <Image
            mt={"20"}
            mx={"auto"}
            src="Images/logo.png"
            height="36"
            width="1xl"
          ></Image>
        </Box>
        <Heading
          mx={{ base: "8", md: "12", lg: "20" }}
          fontSize={{ base: "24px", md: "40px", lg: "58px" }}
          textColor={"red.600"}
          mt={"10"}
          fontStyle={"inherit"}
        >
          Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
          Karachi, Lahore, Islamabad, and Peshawar
        </Heading>
        <Text
          mx={{ base: "8", md: "12", lg: "20" }}
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          py={"6"}
        >
          Getting Ready for the Next Generation and Future of the Internet -
          Join a 13 Trillion Dollar Industry with 5 Billion Users
        </Text>
        <Box mx={{ base: "8", md: "12", lg: "20" }}>
          <Image mt={"10"} mx={"auto"} src="Images/metaverse-img.png"></Image>
        </Box>
        <Text
          mx={{ base: "8", md: "12", lg: "20" }}
          fontSize={{ base: "24px", md: "32px", lg: "44px" }}
          fontWeight="400"
        >
          Make life easier with a little help from our experts
        </Text>
      </Box>
      <SimpleGrid
        m={{ base: "8", md: "12", lg: "20" }}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(300px, 4fr))"
      >
        <Card h={"80"}>
          <CardHeader>
            <Image h={"20"} w={"18"} src="/Images/sir.png" />
          </CardHeader>
          <CardBody>
            <Text mt={"-2"} mb={"9"} fontSize={"20px"}>
              Zia Khan
            </Text>
            <Text mt={"-2"}>
              Web 3, DeFi, Cloud and Metaverse Architect | CEO Panacloud | COO
              Presidential Initiative for AI and Computing
            </Text>
          </CardBody>
          <CardFooter>
            <ArrowForwardIcon
              mt={"-6"}
              ml={"auto"}
              color={"grey"}
              boxSize={"8"}
            />
          </CardFooter>
        </Card>
        <Card h={"80"}>
          <CardHeader>
            <Image h={"20"} w={"18"} src="/Images/sir.png" />
          </CardHeader>
          <CardBody>
            <Text mt={"-2"} mb={"9"} fontSize={"20px"}>
              Adil Altaf
            </Text>
            <Text mt={"-2"}>
              Internet-Scale Multi-Cloud Global App Architect | Full Stack Cloud
              Developer.
            </Text>
          </CardBody>
          <CardFooter>
            <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"} />
          </CardFooter>
        </Card>
        <Card h={"80"}>
          <CardHeader>
            <Image h={"20"} w={"18"} src="/Images/MamHira.png" />
          </CardHeader>
          <CardBody>
            <Text mt={"-2"} mb={"9"} fontSize={"20px"}>
              Hira Khan
            </Text>
            <Text>Co-Founder & Director at Panacloud</Text>
          </CardBody>
          <CardFooter>
            <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"} />
          </CardFooter>
        </Card>
        <Card h={"80"}>
          <CardHeader>
            <Image h={"20"} w={"18"} src="/Images/sir.png" />
          </CardHeader>
          <CardBody>
            <Text mt={"-2"} mb={"9"} fontSize={"20px"}>
              Daniyal Nagori
            </Text>
            <Text>Software Development Lead at Panacloud Pvt Ltd.</Text>
          </CardBody>
          <CardFooter>
            <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"} />
          </CardFooter>
        </Card>
      </SimpleGrid>
      <Box
        p={{ base: "5", md: "8", lg: "10" }}
        mx={{ base: "8", md: "12", lg: "20" }}
        boxShadow={"lg"}
        borderRadius={"md"}
      >
        <Text
          textColor={"red.600"}
          fontSize={{ base: "24px", md: "32px", lg: "44px" }}
          fontWeight="400"
        >
          The Program in a Nutshell: Earn While You Learn
        </Text>
        <Text
          fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          textColor={"black"}
          pt={"6"}
        >
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program’s beginning. It resembles a cross
          between a corporate venture and an educational project.
        </Text>
      </Box>
      <Text
        fontSize={"44px"}
        py={"20"}
        textAlign={"center"}
        textColor={"red.600"}
      >
        Thank You!
      </Text>
      <Footer />
    </>
  );
}
