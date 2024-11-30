import { IconButton, Image, Button, Text, Flex, Container, Box } from "@chakra-ui/react";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <Box mt="58px">
        <Box bg="gray.400">
          <Flex
            h={{ md: "504px", base: "auto" }}
            bgImage="url('images/low-angle-bride-groom-posing-outdoors.png')"
            bgSize="cover"
            bgRepeat="no-repeat"
            justifyContent="center"
            alignItems="center"
            py={{ md: "180px", base: "16px", sm: "20px" }}
          >
            <Container
              mb="62px"
              display="flex"
              justifyContent="center"
              px={{ md: "0px", base: "20px" }}
              w={{ md: "74%", base: "100%" }}
            >
              <Flex
                w="100%"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {/* Left Side: Text Contents */}
                <Flex
                  gap={{ md: "36px", base: "24px" }}
                  flexDirection="column"
                  w={{ md: "70%", base: "100%" }}
                  alignItems="flex-start"
                >
                  <Text
                    fontSize="4xl"
                    color="white"
                    w={{ md: "70%", base: "100%" }}
                    lineHeight="1.2"
                  >
                    Every Love Story is Beautiful, We Make Yours Unforgettable
                  </Text>
                  <Text
                    fontSize="sm"
                    color="whiteAlpha.800"
                    lineHeight="1.6"
                    w={{ md: "70%", base: "100%" }}
                  >
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    of the system.
                  </Text>
                  <Button
                    size="lg"
                    fontFamily="Stigfier"
                    bg="gray.500"
                    color="white"
                    _hover={{ bg: "white.a700_01", color: "gray.500" }}
                    minW="250px"
                    borderRadius="32px"
                  >
                    Contact Us
                  </Button>
                </Flex>

                {/* Right Side: Icon */}
                <IconButton
                  size="lg"
                  icon={<Image src="images/img_overflow_menu.svg" />}
                  aria-label="Menu Icon"
                  w="74px"
                  h="74px"
                  borderRadius="36px"
                  bg="gray.500"
                  _hover={{ bg: "gray.600" }}
                />
              </Flex>
            </Container>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
