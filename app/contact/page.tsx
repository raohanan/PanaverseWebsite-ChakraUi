"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import { Box, Button, Center, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <Box>
        <Heading
          textAlign={"center"}
          mx={{ base: "8", md: "12", lg: "20" }}
          fontSize={{ base: "32px", md: "44px", lg: "58px" }}
          textColor={"red.600"}
          mt={"32"}
          fontStyle={"inherit"}
        >
          Contact Us through
        </Heading>
        <Box mx={{ base: "8", md: "12", lg: "20" }}>
          <Heading
            fontSize={{ base: "20px", md: "32px", lg: "44px" }}
            mt={"10"}
            textAlign={"center"}
          >
            Presidential Initiative for Artificial Intelligence & Computing
            (PIAIC)
          </Heading>
        </Box>
        <Image mt={"20"} mx={"auto"} src="Images/piaic.svg" alt="" height="96"></Image>
        <Center>
          <Link href="http://piaic.org/" target={"_blank"}>
            <Button
              py={"6"}
              px={"24"}
              my={"14"}
              textColor="white"
              bg="green.800"
              borderRadius="4"
              variant={"outline"}
              borderRightRadius="100"
              borderLeftRadius={"100"}
            >
              Visit Us
            </Button>
          </Link>
        </Center>
      </Box>
      <Footer />
    </>
  );
}
