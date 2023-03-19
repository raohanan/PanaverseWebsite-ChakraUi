import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
// import Link from "next/link";
import React from "react";

export default function ThirdContainer() {
  return (
    <>
      <Box>
        <Text textColor={"red.600"} ml={"20"} mt={"32"} mb={"10"}>
          EXPLORE WHAT WE OFFER
        </Text>
        <Text
          mx={{ base: "8", md: "12", lg: "20" }}
          fontSize={{ base: "24px", md: "32px", lg: "44px" }}
          fontWeight="400"
        >
          Find best online training and certifications right for you
        </Text>
      </Box>

      <Box>
        <SimpleGrid
          m={{ base: "8", md: "12", lg: "20" }}
          spacing={6}
          templateColumns="repeat(auto-fill, minmax(300px, 4fr))"
        >
          <Card h={"80"}>
            <CardHeader>
              <Image h={"12"} w={"18"} src="/Images/logo-Meta.png" />
            </CardHeader>
            <CardBody>
              <Text fontWeight="600" mt={"-2"} mb={"9"} fontSize={"20px"}>
                Metaverse
              </Text>
              <Text mt={{base:"-6"}}>
                Metaverse is the Internet as a single and immersive virtual
                world that is facilitated by the use of (VR) and (AR) headsets.
              </Text>
            </CardBody>
            <CardFooter>
              <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"} />
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/generative-AI.png" />
            </CardHeader>
            <CardBody>
              <Text fontWeight="600" mt={"-6"} mb={"9"} fontSize={"20px"}>
                Generative AI
              </Text>
              <Text>
                Generative (AI) describes algorithms (such as ChatGPT) that can
                be used to create new content.
              </Text>
            </CardBody>
            <CardFooter>
              <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"} />
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image
                h={"16"}
                w={"16"}
                src="/Images/genomics-biotechnology.png"
              />
            </CardHeader>
            <CardBody>
              <Text fontWeight="600" mt={"-6"} mb={"9"} fontSize={"20px"}>
                Genomics and Bioinformatics
              </Text>
              <Text>
                Genome sequence data, bioinformatics is now being used for a
                vast array of other important tasks.
              </Text>
            </CardBody>
            <CardFooter>
              <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"} />
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"20"} src="/Images/npi-logo.png" />
            </CardHeader>
            <CardBody>
              <Text fontWeight="600" mt={"-6"} mb={"9"} fontSize={"20px"}>
                Network Programmability
              </Text>
              <Text mt={"-6"}>
                Network programmability enables network behavior to be
                controlled by the software that resides beyond the networking
                devices.
              </Text>
            </CardBody>
            <CardFooter>
              <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"} />
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/Blockchain_Logo.png" />
            </CardHeader>
            <CardBody>
              <Text fontWeight="600" mt={"-6"} mb={"9"} fontSize={"20px"}>
                Blockchain
              </Text>
              <Text mt={"-6"}>
                Blockchain is a shared, immutable ledger that facilitates the
                process of recording transactions and tracking assets in a
                business network.
              </Text>
            </CardBody>
            <CardFooter>
              <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"} />
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/cloud-computing.png" />
            </CardHeader>
            <CardBody>
              <Text fontWeight="600" mt={"-6"} mb={"9"} fontSize={"20px"}>
                Cloud Natives{" "}
              </Text>
              <Text mt={"-6"}>
                Cloud-native is a modern approach to building and running
                software applications that exploits the flexibility,
                scalability, and resilience.
              </Text>
            </CardBody>
            <CardFooter>
              <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"} />
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/web3-icon.png" />
            </CardHeader>
            <CardBody>
              <Text fontWeight="600" mt={"-6"} mb={"9"} fontSize={"20px"}>
                WEb 3.0 & Blockchain
              </Text>
              <Text mt={"-6"}>
                Web 3.0 is based on the idea of defining a data structure with
                more efficient detection, by automating in different
                applications.
              </Text>
            </CardBody>
            <CardFooter>
              <ArrowForwardIcon
                mb={10}
                ml={"auto"}
                color={"grey"}
                boxSize={"8"}
              />
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/iot.png" />
            </CardHeader>
            <CardBody>
              <Text fontWeight="600" mt={"-6"} mb={"9"} fontSize={"20px"}>
                Internet of things{" "}
              </Text>
              <Text mt={"-6"}>
                The Internet of Things describes the network of physical objects
                that are embedded with sensors and other technologies.
              </Text>
            </CardBody>
            <CardFooter>
              <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"} />
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image
                h={"16"}
                w={"16"}
                src="/Images/artificial-intelligence.png"
              />
            </CardHeader>
            <CardBody>
              <Text fontWeight="600" mt={"-6"} mb={"9"} fontSize={"20px"}>
                Artificial Intelligence
              </Text>
              <Text>
                Artificial intelligence is the development of computer systems
                able to perform tasks that normally require humans.
              </Text>
            </CardBody>
            <CardFooter>
              <ArrowForwardIcon mt={{base:"-6"}} ml={"auto"} color={"grey"} boxSize={"8"} />
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
}
