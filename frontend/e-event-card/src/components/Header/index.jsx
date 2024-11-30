import { Button, Link, Flex, Container, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home"); // Track the active link
  const navigate = useNavigate();

  const navigationLinks = [
    { label: "Home", target: "/" },
    { label: "About", target: "landing-content" },
    { label: "Features", target: "features" },
  ];

  const handleNavigation = (label, target) => {
    setActiveLink(label); // Update active link

    // Scroll to section for same-page navigation
    if (target.startsWith("#") || !target.startsWith("/")) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to separate routes (Login/Register)
      navigate(target);
    }
  };

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
                {navigationLinks.map((link, index) => (
                  <Link
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.label, link.target);
                    }}
                    _hover={{ textDecoration: "none" }}
                    _active={{ color: "gray.900" }}
                    color={activeLink === link.label ? "gray.900" : "gray.500"}
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
                onClick={() => {
                  handleNavigation("Login", "/login");
                }}
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
                onClick={() => {
                  handleNavigation("Register", "/register");
                }}
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
