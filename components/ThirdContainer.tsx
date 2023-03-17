import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
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
        <Text mx={"20"} fontSize={"44px"} fontWeight="400">
          Find best online training and certifications right for you
        </Text>
      </Box>

      <Box >
        <SimpleGrid m={"20"} 
          spacing={6}
          templateColumns="repeat(auto-fill, minmax(300px, 4fr))"
        >
          <Card h={"80"}>
            <CardHeader>
            <Image h={"12"} w={"18"} src="/Images/logo-Meta.png" />
            </CardHeader>
            <CardBody>
            <Text mt={"-2"} mb={"9"} fontSize={"20px"}>Metaverse</Text>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/generative-AI.png" />
            </CardHeader>
            <CardBody>
            <Text mt={"-6"} mb={"9"} fontSize={"20px"}>Generative AI</Text>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/genomics-biotechnology.png" />
            </CardHeader>
            <CardBody>
            <Text mt={"-6"} mb={"9"} fontSize={"20px"}>Genomics and Bioinformatics</Text>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
            <Image h={"16"} w={"20"} src="/Images/npi-logo.png" />
            </CardHeader>
            <CardBody>
            <Text mt={"-6"} mb={"9"} fontSize={"20px"}>Network Programmability</Text>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/Blockchain_Logo.png" />
            </CardHeader>
            <CardBody>
            <Text mt={"-6"} mb={"9"} fontSize={"20px"}>Blockchain</Text>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/cloud-computing.png" />
            </CardHeader>
            <CardBody>
            <Text mt={"-6"} mb={"9"} fontSize={"20px"}>Cloud Natives </Text>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/web3-icon.png" />
            </CardHeader>
            <CardBody>
            <Text mt={"-6"} mb={"9"} fontSize={"20px"}>WEb 3.0 & Blockchain</Text>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/iot.png" />
            </CardHeader>
            <CardBody>
            <Text mt={"-6"} mb={"9"} fontSize={"20px"}>Internet of things </Text>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/artificial-intelligence.png" />
            </CardHeader>
            <CardBody>
            <Text mt={"-6"} mb={"9"} fontSize={"20px"}>Artificial Intelligence</Text>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon ml={"auto"} color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
}
