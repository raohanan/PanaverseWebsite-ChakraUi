"use client";

import FirstContainer from "@/components/first-container/FirstContainer";
import Header from "@/components/header/Header";
import SecondContainer from "@/components/second-container/SecondContainer";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <Box as="main">
      <FirstContainer />
      <SecondContainer />
      </Box>
    </>
  );
}
