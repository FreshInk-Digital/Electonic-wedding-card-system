import { Button, Link, Flex, Container, Box } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box id="header">
      <Flex
        mt="35px"
        gap={{ base: "26px", sm: "52px" }}
        flexDirection="column"
        alignItems="center"
      >
        <Container px={{ md: "0px", base: "20px" }}>
          <Flex
            gap={{ md: "40px", base: "32px", sm: "36px" }}
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
              w={{ md: "80%", base: "100%" }}
              borderRadius="46px"
              p="32px"
            >
              <Flex
                justifyContent="center"
                flexDirection={{ base: "column", md: "row" }}
                alignItems="center"
                gap="200px"
              >
                {/* Navigation Links */}
                {[
                  { label: "Home", target: "#main-section" },
                  { label: "About", target: "#landing-content" },
                  { label: "Features", target: "#features" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.target} // Links to specific section
                    _hover={{ textDecoration: "none", color: "gray.900" }}
                    _active={{ color: "gray.900" }}
                    color="gray.500"
                    fontSize="lg"
                    px="24px"
                    py="8px"
                    textAlign="center"
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>
            </Box>

            {/* Side-by-Side Login and Register Buttons */}
            <Flex
              mt="10px"
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
                minW="350px"
                height="60px"
                borderRadius="46px"
                fontSize="xl"
                _hover={{ bg: "gray.500", color: "white.a700_01" }}
                _active={{ bg: "gray.300" }}
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
                minW="350px"
                height="60px"
                borderRadius="46px"
                fontSize="xl"
                _hover={{ bg: "gray.500", color: "white.a700_01" }}
                _active={{ bg: "gray.300" }}
              >
                Register
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}