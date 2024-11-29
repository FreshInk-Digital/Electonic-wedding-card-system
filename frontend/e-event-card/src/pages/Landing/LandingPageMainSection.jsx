import { Image, Button, Text, Link, Flex, Container } from "@chakra-ui/react";
import React from "react";

export default function LandingPageMainSection() {
  return (
    <>
      {/* landing page main section */}
      <Flex
        mt="96px"
        gap={{ base: "26px", sm: "52px" }}
        flexDirection="column"
        alignItems="center"
      >
        <Container px={{ md: "0px", base: "20px" }}>
          <Flex
            gap={{ md: "116px", base: "58px", sm: "87px" }}
            flexDirection="column"
            alignItems="center"
            px={{ md: "56px", base: "16px", sm: "20px" }}
          >
            <Flex
              mt="58px"
              borderColor="gray.500"
              borderWidth="3px"
              borderStyle="solid"
              bg="white.a700_01"
              w={{ md: "90%", base: "100%" }}
              justifyContent="center"
              mx={{ md: "186px", base: "0px" }}
              borderRadius="28px"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex px={{ md: "10px", base: "20px" }}>
                <Text color="gray.500" mb="4px">
                  Home
                </Text>
              </Flex>
              <Flex
                flex={1}
                justifyContent="center"
                alignSelf={{ md: "auto", base: "stretch" }}
                px={{ md: 0, base: "20px" }}
              >
                <Text mb="4px">About</Text>
              </Flex>
              <Flex px={{ md: "10px", base: "20px" }}>
                <Text mb="4px">Feature</Text>
              </Flex>
            </Flex>
            <Flex w={{ md: "92%", base: "100%" }} justifyContent="space-between" gap="20px">
              <Link href="#" pt={{ base: "16px", sm: 0 }} px={{ base: "16px", sm: 0 }}>
                <Text
                  color="gray.500"
                  pt="26px"
                  pb="20px"
                  borderColor="gray.500"
                  borderWidth="1px"
                  borderStyle="solid"
                  px="34px"
                  borderRadius="46px"
                >
                  Login
                </Text>
              </Link>
              <Button
                size="4xl"
                colorscheme="white_A700"
                color="gray.500"
                fontFamily="Stigfier"
                borderColor="gray.500"
                borderWidth="2px"
                borderStyle="solid"
                minw="590px"
                borderRadius="46px"
              >
                Register
              </Button>
            </Flex>
          </Flex>
        </Container>
        <Image src="images/img_frame_427321538.png" alt="Image" h="16px" w="100%" fit="cover" />
      </Flex>
    </>
  );
}
