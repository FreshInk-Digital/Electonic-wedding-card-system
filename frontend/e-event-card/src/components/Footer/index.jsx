import React from "react";
import { Box, Flex, Text, Container, UnorderedList, ListItem, Link, IconButton, Image, Input, Button } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box w="100%" bg="white.a700">
      <Flex
        as="footer"
        justifyContent="center"
        alignItems="center"
        py={{ md: "150px", base: "16px", sm: "20px" }}
      >
        <Container w={{ md: "74%", base: "100%" }} px={{ md: "0", base: "20px" }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="flex-start"
            gap="20px"
          >
            {/* Left Section */}
            <Flex direction="column" gap="32px" w={{ base: "100%", md: "38%" }}>
              <Image
                src="images/img_footer_logo.png"
                alt="Footer Logo"
                h="48px"
                w="128px"
                objectFit="contain"
              />
              <UnorderedList
                listStyleType="none"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                gap="20px"
              >
                <ListItem>
                  <Link href="#">Homepage</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Services</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">About Us</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Pricing</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Gallery</Link>
                </ListItem>
              </UnorderedList>
              <Flex gap="6px">
                <IconButton
                  icon={<Image src="images/Shape.svg" />}
                  aria-label="Close Icon"
                  w="36px"
                  borderRadius="18px"
                />
                <IconButton
                  icon={<Image src="images/img_facebook.svg" />}
                  aria-label="Facebook Icon"
                  w="36px"
                  borderRadius="18px"
                />
                <IconButton
                  icon={<Image src="images/twitter.svg" />}
                  aria-label="Twitter Icon"
                  w="36px"
                  borderRadius="18px"
                />
              </Flex>
            </Flex>

            {/* Links Section */}
            <Flex direction="column" gap="14px" w={{ base: "100%", md: "8%" }}>
              <Text fontSize="lg" fontWeight="bold">Links</Text>
              <UnorderedList listStyleType="none" display="flex" flexDirection="column" gap="14px">
                <ListItem>
                  <Link href="#">Home</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">About Us</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Our Services</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Our Team</Link>
                </ListItem>
              </UnorderedList>
            </Flex>

            {/* Newsletter Section */}
            <Flex direction="column" gap="32px" w={{ base: "100%", md: "28%" }}>
              <Text fontSize="lg" fontWeight="bold">Newsletter</Text>
              <Text fontSize="sm" color="gray.600">
                Experience premium wedding services at competitive prices. Our packages are designed to provide top-notch quality and service.
              </Text>
              <Box position="relative" h={{ md: "60px", base: "auto" }}>
                <Input
                  size="sm"
                  placeholder="Your Email"
                  type="email"
                  color="black.900_b2"
                  fontFamily="Stigfier"
                  textTransform="capitalize"
                  flexGrow={1}
                />
                <Button
                  size="sm"
                  fontFamily="Stigfier"
                  textTransform="capitalize"
                  minW="132px"
                  position="absolute"
                  right="9px"
                  bottom="0"
                  top="0"
                  my="auto"
                >
                  Signup
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}
