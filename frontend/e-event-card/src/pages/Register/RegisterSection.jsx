import {
  Image,
  Button,
  Input,
  Box,
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";
import React from "react";

export default function RegisterSection() {
  return (
    <>
      {/* register section */}
      <Box>
        <Box>
          <Flex
            bg="gray.500"
            justifyContent="center"
            py={{ md: "120px", base: "16px", sm: "20px" }}
          >
            <Container
              mt="8px"
              display="flex"
              justifyContent="center"
              px={{ md: "0px", base: "20px" }}
            >
              <Flex
                gap={{ base: "31px", sm: "62px" }}
                w="100%"
                flexDirection="column"
              >
                <Text size="text4xl" color="gray.50" lineHeight="61px">
                  <>
                    Register Now To Start <br />
                    Your Event Planning
                  </>
                </Text>
                <Flex
                  mb="14px"
                  gap="28px"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Text size="textmd" color="gray.50">
                    Lorem ipsum dolor sit amet,{" "}
                  </Text>
                  <Text
                    size="textxs"
                    color="white.a700"
                    w={{ md: "46%", base: "100%" }}
                    lineHeight="30px"
                  >
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account account of the system, and
                    expound th of the system,
                  </Text>
                </Flex>
              </Flex>
            </Container>
          </Flex>
          <Flex
            mt="-466px"
            position="relative"
            alignItems="center"
            mx={{ md: "80px", base: "0px" }}
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex
              mb="88px"
              gap="38px"
              zIndex={1}
              alignSelf="flex-end"
              w={{ md: "52%", base: "100%" }}
              position="relative"
              flexDirection="column"
              px={{ md: 0, base: "20px" }}
            >
              <Text size="text5xl" lineHeight="91px">
                Celebrating Love, One Frame at a Time
              </Text>
              <Text
                size="textxs"
                color="black.900 cc"
                w={{ md: "74%", base: "100%" }}
                lineHeight="30px"
              >
                <>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain <br />
                  was born and I will give you a complete account of the system,
                  and expound th
                </>
              </Text>
              <Flex flexDirection={{ md: "row", base: "column" }}>
                <Button
                  size="2xl"
                  fontFamily="Stigfier"
                  minw="288px"
                  borderRadius="34px"
                >
                  Explore Now
                </Button>
                <Flex
                  gap="34px"
                  flex={1}
                  alignItems="center"
                  px={{ md: "56px", base: "16px", sm: "20px" }}
                  alignSelf={{ md: "auto", base: "stretch" }}
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Image
                    src="images/img_frame_9.svg"
                    alt="Frame Image"
                    h="68px"
                    w={{ base: "100%", sm: "46%" }}
                    fit="contain"
                  />
                  <Flex
                    flex={1}
                    flexDirection="column"
                    alignItems="flex-start"
                    alignSelf={{ base: "stretch", sm: "auto" }}
                  >
                    <Text color="gray.500">230+</Text>
                    <Text size="textxs">Wedding Theme</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              ml={{ md: "-58px", base: "0px" }}
              gap="28px"
              position="relative"
              bg="white.a700"
              boxShadow="xs"
              w={{ md: "38%", base: "100%" }}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              px={{ md: "56px", base: "20px" }}
              py={{ md: "126px", base: "16px", sm: "20px" }}
            >
              <Text>Fill Your Inputs</Text>
              <Flex
                gap="34px"
                w={{ md: "92%", base: "100%" }}
                flexDirection="column"
              >
                <Flex gap="20px" flexDirection="column" alignItems="flex-start">
                  <Text size="textmd">Full Name</Text>
                  <Input
                    size="lg"
                    placeholder={`Your Name`}
                    type="text"
                    fontFamily="Stigfier"
                    alignSelf="stretch"
                  />
                </Flex>
                <Flex gap="20px" flexDirection="column" alignItems="flex-start">
                  <Text size="textmd">Contact</Text>
                  <Input
                    placeholder={+255}
                    fontFamily="Stigfier"
                    alignSelf="stretch"
                  />
                </Flex>
                <Flex gap="20px" flexDirection="column" alignItems="flex-start">
                  <Text size="textmd">Password</Text>
                  <Input
                    placeholder={`*************************************************8`}
                    type="password"
                    fontFamily="Stigfier"
                    alignSelf="stretch"
                  />
                </Flex>
                <Flex gap="34px" flexDirection="column" alignItems="center">
                  <Flex
                    gap="20px"
                    alignSelf="stretch"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    <Text size="textmd">Confirm Password</Text>
                    <Input
                      placeholder={`*************************************************8`}
                      type="password"
                      fontFamily="Stigfier"
                      alignSelf="stretch"
                    />
                  </Flex>
                  <Button
                    size="md"
                    color="gray.50"
                    fontFamily="Stigfier"
                    textTransform="capitalize"
                    minw="116px"
                    borderRadius="5px"
                  >
                    Login
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
