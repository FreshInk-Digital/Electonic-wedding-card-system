import { Image, Button, Link, Flex, Container, Box } from "@chakra-ui/react";
import React from "react";

export default function LandingPageMainSection() {
  return (
    <>
      {/* Landing page main section */}
      <Flex
        mt="35px"
        gap={{ base: "26px", sm: "52px" }}
        flexDirection="column"
        alignItems="center"
      >
        <Container px={{ md: "0px", base: "20px" }}>
          <Flex
            gap={{ md: "40px", base: "32px", sm: "36px" }} // Reduced gap between sections
            flexDirection="column"
            alignItems="center"
            px={{ md: "56px", base: "16px", sm: "20px" }}
          >
            {/* Navigation Section */}
            <Box
              borderColor="gray.500"
              borderWidth="1px"
              borderStyle="solid"
              bg="white.a700_01"
              w={{ md: "60%", base: "100%" }}
              borderRadius="46px"
              p="32px"
            >
              <Flex
                justifyContent="center"
                flexDirection={{ base: "column", md: "row" }}
                alignItems="center"
                gap="100px"
              >
                {/* Navigation Links */}
                {["Home", "About", "Feature"].map((item, index) => (
                  <Link
                    key={index}
                    href={`#${item.toLowerCase()}`} // Points to the same page section
                    _hover={{ textDecoration: "none", color: "gray.900" }} // Hover effect
                    _active={{ color: "gray.900" }} // Active effect
                    color="gray.500"
                    fontSize="lg"
                    px="24px"
                    py="8px"
                    textAlign="center"
                    id={`${item.toLowerCase()}-link`} // For additional dynamic styling or targeting
                  >
                    {item}
                  </Link>
                ))}
              </Flex>
            </Box>

            {/* Side-by-Side Login and Register Buttons */}
            <Flex
              mt="10px" // Reduced margin-top to bring buttons closer to navigation
              w="100%"
              justifyContent="center"
              alignItems="center"
              gap="40px"
            >
              <Button
                size="lg"
                bg="white.a700_01"
                color="gray.500"
                fontFamily="Stigfier"
                borderColor="gray.500"
                borderWidth="1px"
                borderStyle="solid"
                minW="280px"
                height="60px"
                borderRadius="46px"
                fontSize="xl"
                _hover={{ bg: "gray.500", color: "white.a700_01" }} // Hover effect for button
                _active={{ bg: "gray.300" }} // Active effect for button
              >
                Login
              </Button>
              <Button
                size="lg"
                bg="white.a700_01"
                color="gray.500"
                fontFamily="Stigfier"
                borderColor="gray.500"
                borderWidth="1px"
                borderStyle="solid"
                minW="280px"
                height="60px"
                borderRadius="46px"
                fontSize="xl"
                _hover={{ bg: "gray.500", color: "white.a700_01" }} // Hover effect for button
                _active={{ bg: "gray.300" }} // Active effect for button
              >
                Register
              </Button>
            </Flex>
          </Flex>

        </Container>

        {/* Image Section */}
        <Image
          src="images/img_frame_427321538.png"
          alt="Image"
          h="10px"
          w="100%"
          objectFit="cover"
        />
      </Flex>
    </>
  );
}
