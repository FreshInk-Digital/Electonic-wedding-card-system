import React from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LanguageSelectionSection from "./Landing/LanguageSelectionSection";

const NotFound = () => {
  return (
    <>
    <LanguageSelectionSection />
    <Flex
      align="center"
      justify="center"
      height="80vh"
      bg="gray.50"
      px="16px"
      textAlign="center"
    >
      <Box>
        <Heading as="h1" size="2xl" mb="16px" color="gray.500" fontFamily="Stigfier" fontWeight="bold">
          Oops! Page Not Found
        </Heading>
        <Text fontSize="3xl" color="gray.900" mb="32px">
          It seems we ran out of code. Don’t worry, let’s get you back on track.
        </Text>
        <Link to="/">
          <Button
            size="lg"
            fontFamily="Stigfier"
            bg="gray.500"
            color="white"
            _hover={{ bg: "blue.500" }}
            _active={{ bg: "gray.300" }}
          >
            Go Back Home
          </Button>
        </Link>
      </Box>
    </Flex>
    </>
  );
};

export default NotFound;
