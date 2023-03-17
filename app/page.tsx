"use client";

import FirstContainer from "@/components/FirstContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SecondContainer from "@/components/SecondContainer";
import ThirdContainer from "@/components/ThirdContainer";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <Box as="main">
        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
        <Footer />
      </Box>
    </>
  );
}
