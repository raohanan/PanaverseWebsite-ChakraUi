"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
          mx={"auto"}
          fontSize={"58px"}
          textColor={"red.600"}
          mt={"32"}
          fontStyle={"inherit"}
        >
          Contact Us through
        </Heading>
        <Heading mt={"10"} textAlign={"center"}>
          Presidential Initiative for Artificial Intelligence & Computing
          (PIAIC)
        </Heading>
        <Image mt={"20"} mx={"auto"} src="Images/piaic.svg" height="96"></Image>
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
