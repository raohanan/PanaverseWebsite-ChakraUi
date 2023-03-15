import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import React from "react";

export default function ThirdContainer() {
  return (
    <>
      <Box>
        <Text ml={"20"} mt={"32"} mb={"10"}>
          EXPLORE WHAT WE OFFER
        </Text>
        <Text mx={"20"} fontSize={"44px"} fontWeight="300">
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
              <Image h={"16"} w={"16"} src="/Images/generative-AI.png" />
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <ArrowForwardIcon color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/generative-AI.png" />
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/generative-AI.png" />
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"12"} w={"16"} src="/Images/logo-Meta.png" />
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/Blockchain_Logo.png" />
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/cloud-computing.png" />
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/iot.png" />
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
          <Card h={"80"}>
            <CardHeader>
              <Image h={"16"} w={"16"} src="/Images/iot.png" />
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
            <ArrowForwardIcon textAlign={"center"} color={"grey"} boxSize={"8"}/>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
}
