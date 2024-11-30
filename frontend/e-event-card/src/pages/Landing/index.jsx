import { Helmet } from "react-helmet";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import LandingContentSection from "./LandingContentSection";
import LandingPageMainSection from "./LandingPageMainSection";
import LandingPageMainSection1 from "./LandingPageMainSection1";
import LanguageSelectionSection from "./LanguageSelectionSection";
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
  Container,
} from "@chakra-ui/react";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Wedding Home - Explore premium wedding services</title>
        <meta
          name="description"
          content="Discover our premium wedding services and explore over 230+ themes. Celebrate love with unforgettable experinces  and start planning your event today."
        />
      </Helmet>
      <Box overflowX="scroll" bg="gray.50" w="100%">
        {/* language selection section */}
        <LanguageSelectionSection />

        {/* landing page main section */}
        <LandingPageMainSection />

        {/* landing page main section */}
        <LandingPageMainSection1 />

        {/* landing content section */}
        <LandingContentSection />

        {/* hero section */}
        <HeroSection />
        <Image
          src="images/img_frame_427321538.png"
          alt="Image"
          h="16px"
          mt="26px"
          w="100%"
          fit="cover"
        />

        {/* feature section */}
        <FeatureSection />
        <Box mt="262px">
          <Image
            src="images/img_frame_427321538.png"
            alt="Image"
            h="16px"
            w="100%"
            fit="cover"
          />
          <Flex
            as="footer"
            bg="white.a700"
            justifyContent="center"
            alignItems="center"
            py={{ md: "150px", base: "16px", sm: "20px" }}
          >
            <Container
              display="flex"
              justifyContent="center"
              px={{ md: "0px", base: "20px" }}
            >
              <Flex
                w="100%"
                justifyContent="space-between"
                alignItems="flex-start"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex
                  gap={{ base: "32px", sm: "64px" }}
                  w={{ md: "38%", base: "100%" }}
                  flexDirection="column"
                >
                  <Flex gap="32px" flexDirection="column">
                    <Image
                      src="images/img_footer_logo.png"
                      alt="Footer Logo"
                      h="48px"
                      w="128px"
                      fit="contain"
                    />
                    <UnorderedList
                      styleType="none"
                      display="flex"
                      justifyContent="space-between"
                      flexWrap="wrap"
                      gap="20px"
                    >
                      <ListItem>
                        <Link href="#">
                          <Text size="texts">Homepage</Text>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <Text size="texts">Services</Text>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <Text size="texts">About Us</Text>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <Text size="texts">Pricing</Text>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <Text size="texts">Gallery</Text>
                        </Link>
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                  <Flex gap="6px">
                    <IconButton
                      icon={<Image src="images/img_close.svg" />}
                      aria-label="13:358-Close Icon"
                      w="36px"
                      borderRadius="18px"
                    />
                    <IconButton
                      icon={<Image src="images/img_play_white_a700.svg" />}
                      aria-label="13:361-Play Icon"
                      w="36px"
                      borderRadius="18px"
                    />
                    <IconButton
                      colorScheme="white A700"
                      icon={<Image src="images/img_info.svg" />}
                      aria-label="13:364-Info Icon"
                      w="36px"
                      borderRadius="18px"
                    />
                    <IconButton
                      icon={<Image src="images/img_trash.svg" />}
                      aria-label="13:375-Trash Icon"
                      w="36px"
                      borderRadius="18px"
                    />
                    <IconButton
                      icon={<Image src="images/img_facebook.svg" />}
                      aria-label="13:378-Facebook Icon"
                      w="36px"
                      borderRadius="18px"
                    />
                  </Flex>
                </Flex>
                <Flex
                  gap="40px"
                  w={{ md: "8%", base: "100%" }}
                  flexDirection="column"
                  alignItems="flex-start"
                >
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
                      <Link href="#">
                        <Text size="texts" color="black.900 b2">
                          Home
                        </Text>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#">
                        <Text size="texts" color="black.900_b2">
                          About Us
                        </Text>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#">
                        <Text size="texts" color="black.900 b2">
                          Our Services
                        </Text>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#">
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
                  w={{ md: "28%", base: "100%" }}
                  flexDirection="column"
                >
                  <Flex
                    gap="44px"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    <Text size="textlg">Newsletter</Text>
                    <Text
                      size="textxs"
                      color="black.900_b2"
                      w="100%"
                      lineHeight="30px"
                    >
                      Experience premium wedding servic es at competitive
                      prices. Our packages are designed to provide top-notch
                      quality and service,{" "}
                    </Text>
                  </Flex>
                  <Box
                    h={{ md: "60px", base: "auto" }}
                    position="relative"
                    alignContent="center"
                  >
                    <Input
                      size="sm"
                      placeholder={`Your Email`}
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
                      bottom="0px"
                      top="0px"
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
      </Box>
    </>
  );
}
