import { Text, Container, Flex, Box } from "@chakra-ui/react";
import React from "react";

export default function LanguageSelectionSection() {
  return (
    <>
      {/* language selection section */}
      <Box>
        <Flex
          bg="gray.500"
          flexDirection="column"
          alignItems="center"
          py={{ base: "16px", sm: "40px" }}
        >
          <Container
            mb="8px"
            gap="12px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            px={{ md: "56px", base: "20px" }}
          >
            <Text color="white.a700 01">Choose Language </Text>
            <Text
              size="textmd"
              color="white.a700 01"
              textDecoration="underline"
            >
              Swahili/English
            </Text>
          </Container>
        </Flex>
      </Box>
    </>
  );
}
