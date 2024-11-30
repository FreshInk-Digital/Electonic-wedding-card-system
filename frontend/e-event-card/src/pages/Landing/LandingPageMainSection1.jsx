import { Image, Box, Text, Flex, Button, Container } from "@chakra-ui/react";
import React from "react";

export default function LandingPageMainSection1() {
  return (
    <>
      {/* landing page main section */}
      <Flex mt="52px" flexDirection="column" alignItems="center">
        <Container
          gap="46px"
          display="flex"
          flexDirection="column"
          px={{ md: "0px", base: "20px" }}
        >
          <Flex
            gap="44px"
            justifyContent="center"
            alignItems="center"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex bg="gray.400">
              <Image
                src="images/img_medium_shot_photo.png"
                alt="Medium Shot Image"
                h={{ md: "324px", base: "auto" }}
                w="100%"
                fit="cover"
                borderRadius="20px"
              />
            </Flex>
            <Flex
              gap="42px"
              bg="gray.500"
              flex={1}
              flexDirection="column"
              p={{ base: "16px", sm: "38px" }}
              alignSelf={{ md: "auto", base: "stretch" }}
            >
              <Image
                src="images/img_frame_427320872.svg"
                alt="Frame Image"
                h="70px"
              />
              <Flex
                mr={{ md: "14px", base: "0px" }}
                gap="22px"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Text color="white.a700 cc">But I must explain to you how</Text>
                <Text
                  size="textxs"
                  color="white.a700_cc"
                  w="100%"
                  lineHeight="30px"
                >
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praing pain was born and I will give
                  you a complete account of the
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            alignItems="flex-start"
            flexDirection={{ md: "row", base: "column " }}
          >
            <Flex
              gap="38px"
              flex={1}
              flexDirection="column"
              alignSelf={{ md: "auto", base: "stretch" }}
            >
              <Text
                size="text5xl"
                w={{ md: "88%", base: "100%" }}
                lineHeight="91px"
              >
                Celebrating Love, One Frame at a Time
              </Text>
              <Text
                size="textxs"
                color="black.900 cc"
                w={{ md: "90%", base: "100%" }}
                lineHeight="30px"
              >
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound th
              </Text>
              <Flex flexDirection={{ md: "row", base: "column" }}>
                <Button
                  size="2xl"
                  fontFamily="Stigfier"
                  minw="288px"
                  borderRadius="34px"
                >
                  Explore Now
                </Button>
                <Flex
                  gap="34px"
                  flex={1}
                  alignItems="center"
                  px={{ md: "56px", base: "16px", sm: "20px" }}
                  alignSelf={{ md: "auto", base: "stretch" }}
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Image
                    src="images/img_frame_9.svg"
                    alt="Secondary Image"
                    h="68px"
                    w={{ base: "100%", sm: "36%" }}
                    fit="contain"
                  />
                  <Flex
                    flex={1}
                    flexDirection="column"
                    alignItems="flex-start"
                    alignSelf={{ base: "stretch", sm: "auto" }}
                  >
                    <Text color="gray.500">230+</Text>
                    <Text size="textxs">Wedding Theme</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Box
              alignSelf="center"
              bg="gray.400"
              w={{ md: "24%", base: "100%" }}
            >
              <Image
                src="images/img_prepared_wedding_hall.png"
                alt="Prepared Hall Image"
                h={{ md: "494px", base: "auto" }}
                w="100%"
                fit="cover"
                borderRadius="12px"
              />
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
