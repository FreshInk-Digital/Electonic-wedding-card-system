import {
  Button,
  Input,
  Box,
  Text,
  Flex,
  Link,
  UnorderedList,
  ListItem,
  IconButton,
  Image,
  Container
} from "@chakra-ui/react";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <Flex
      {...props}
      as="footer"
      justifyContent="center"
      alignItems="center"
      py={{ md: "150px", base: "16px", sm: "20px" }}
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        gap="20px"
        px={{ md: "0px", base: "20px" }}
        flexDirection={{ md: "row", base: "column" }}
      >
        <Flex gap={{ base: "32px", sm: "64px" }} w={{ md: "38%", base: "100%" }} flexDirection="column">
          <Flex gap="32px" flexDirection="column">
            <Image src="images/img_footer_logo.png" alt="Footer logo" h="48px" w="128px" fit="contain" />
            <UnorderedList styleType="none" display="flex" justifyContent="space-between" flexWrap="wrap" gap="20px">
              <ListItem>
                <Link href="#" target="_blank" rel="noreferrer">
                  <Text size="texts">Homepage</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" target="_blank" rel="noreferrer">
                  <Text size="texts">Services</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" target="_blank" rel="noreferrer">
                  <Text size="texts">About Us</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" target="_blank" rel="noreferrer">
                  <Text size="texts">Pricing</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" target="_blank" rel="noreferrer">
                  <Text size="texts">Gallery</Text>
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
          <Flex gap="6px">
            <IconButton
              icon={<Image src="images/img_close.svg" />}
              aria-label="82:321-Close Icon"
              w="36px"
              borderRadius="18px"
            />
            <Image src="images/img_play.svg" alt="Play Icon" h="36px" />
            <IconButton
              colorScheme="white_A700"
              icon={<Image src="images/img_info.svg" />}
              aria-label="82:327-Info Icon"
              w="36px"
              borderRadius="18px"
            />
            <IconButton
              icon={<Image src="images/img_trash.svg" />}
              aria-label="82:338-Trash Icon"
              w="36px"
              borderRadius="18px"
            />
            <IconButton
              icon={<Image src="images/img_facebook.svg" />}
              aria-label="82:341-Facebook Icon"
              w="36px"
              borderRadius="18px"
            />
          </Flex>
        </Flex>
        <Flex gap="40px" w={{ md: "8%", base: "100%" }} flexDirection="column" alignItems="flex-start">
          <Text size="textlg" color="black.900_cc">
            Links
          </Text>
          <UnorderedList
            styleType="none"
            gap="14px"
            display="flex"
            alignSelf="stretch"
            flexDirection="column"
            alignItems="flex-start"
          >
            <ListItem>
              <Link href="Home" target="blank" rel="noreferrer">
                <Text size="texts" color="black.900 b2">
                  Home
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" target="blank" rel="noreferrer">
                <Text size="texts" color="black.900 b2">
                  About Us
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" target="blank" rel="noreferrer">
                <Text size="texts" color="black.900 b2">
                  Our Services
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" target="blank" rel="noreferrer">
                <Text size="texts" color="black.900 b2">
                  Our Team
                </Text>
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex
          gap={{ base: "31px", sm: "62px" }}
          alignSelf="center"
          w={{ md: "28%", base: "100%"}}
          flexDirection="column"
        >
          <Flex gap="44px" flexDirection="column" alignItems="flex-start">
            <Text size="textlg">Newsletter</Text>
            <Text size="textxs" color="black.900 b2" w="100%" lineHeight="30px">
              Experience premium wedding servic es at competitive prices. Our packages are designed to provide top-notch
              quality and service, {" "}
            </Text>
          </Flex>
          <Box h={{ md: "60px", base: "auto" }} position="relative" alignContent="center">
            <Input
              size="sm"
              placeholder={`Your Email`}
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
              bottom="0px"
              top="0px"
              my="auto"
            >
              Signup
            </Button>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}