import { Image, Box, Text, Flex, Button, Container } from "@chakra-ui/react";
import React from "react";

export default function LandingPageMainSection1() {
  return (
    <>
      {/* Landing page main section */}
      <Flex mt="52px" flexDirection="column" alignItems="center" fontFamily="Stigfier">
        <Container
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="46px"
          px={{ md: "0px", base: "20px" }}
          w={{ md: "74%", base: "100%" }}
        >
          {/* Section with Image and Text */}
          <Flex
            gap="20px"
            justifyContent="center"
            alignItems="center"
            flexDirection={{ md: "row", base: "column" }}
          >
            {/* Left Image */}
            <Flex bg="gray.400" justifyContent="center" alignItems="center">
              <Image
                src="images/img_medium_shot_photo.png"
                alt="Medium Shot Image"
                h={{ md: "200px", base: "auto" }}
                w="100%"
                fit="cover"
                borderRadius="20px"
              />
            </Flex>

            {/* Right Text Section */}
            <Flex
              gap="10px"
              bg="gray.500"
              flex={1}
              flexDirection="column"
              p={{ base: "24px", sm: "38px" }}
              h={{ md: "200px", base: "auto" }}
              alignItems="flex-start"
            >
              <Flex
              gap="10px"
              alignItems="center"
              justifyContent="space-between"
              w="100%"
            >
              {/* Left Image */}
              <Image
                src="images/img_frame_427320872.svg"
                alt="Frame Image"
                h="30px"
              />
              {/* Right Image */}
              <Image
                src="images/arrow_outward.svg"
                alt="Arrow Outward"
                h="30px"
              />
            </Flex>
              <Flex
                gap="10px"
                flexDirection="column"
                alignItems="flex-start"
                textAlign="flex-start"
              >
                <Text color="white" fontSize="lg">
                  But I must explain to you how
                </Text>
                <Text color="whiteAlpha.800" lineHeight="30px" fontSize="sm">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born, and I will
                  give you a complete account of the
                </Text>
              </Flex>
            </Flex>
          </Flex>

          {/* Centered Text and Additional Buttons */}
          <Flex
            alignItems="flex-start"
            justifyContent="flex-start"
            flexDirection={{ md: "row", base: "column" }}
            gap="44px"
          >
            <Flex
              flex={1}
              flexDirection="column"
              alignItems="flex-start"
              textAlign="flex-start"
              gap="40px"
            >
              <Text
                fontSize="6xl"
                w={{ md: "88%", base: "100%" }}
                lineHeight="60px"
              >
                Celebrating Love, One Frame at a Time
              </Text>
              <Text
                fontSize="sm"
                color="gray.700"
                w={{ md: "100%", base: "100%" }}
                lineHeight="30px"
              >
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born, and I will give
                you a complete account of the system, and expound the
              </Text>

              {/* Buttons and Secondary Image Section */}
              <Flex
                gap="24px"
                justifyContent="flex-start"
                alignItems="flex-start"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Button
                  size="lg"
                  fontFamily="Stigfier"
                  minW="288px"
                  borderRadius="34px"
                  bg="gray.500"
                  color="white"
                  _hover={{ bg: "gray.600" }}
                >
                  Explore Now
                </Button>

                <Flex
                  gap="16px"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  flexDirection="row"
                >
                  <Image
                    src="images/img_frame_9.svg"
                    alt="Secondary Image"
                    h="68px"
                    w={{ base: "50px", sm: "36%" }}
                    fit="contain"
                  />
                  <Flex
                    flexDirection="column"
                    alignItems="flex-start"
                    textAlign="flex-start"
                  >
                    <Text color="gray.500" fontSize="3xl">
                      230+
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Wedding Themes
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            {/* Right-Side Large Image */}
            <Box
              bg="gray.400"
              alignSelf="flex-start"
              w={{ md: "30%", base: "100%" }}
              borderRadius="12px"
            >
              <Image
                src="images/img_prepared_wedding_hall.png"
                alt="Prepared Hall Image"
                h={{ md: "390px", base: "auto" }}
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
