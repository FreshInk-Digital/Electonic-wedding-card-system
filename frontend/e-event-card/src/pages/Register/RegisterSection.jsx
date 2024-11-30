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
              w={{ md: "80%", base: "100%" }}
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
                  gap="20px"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Text size="textmd" color="gray.50">
                    Lorem ipsum dolor sit amet,{" "}
                  </Text>
                  <Text
                    size="textxs"
                    color="white.a700"
                    w={{ md: "60%", base: "100%" }}
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
            mt="-446px"
            position="relative"
            alignItems="center"
            mx={{ md: "80px", base: "0px" }}
            flexDirection={{ md: "row-reverse", base: "column" }} // Switched to "row-reverse"
          >
            {/* Registration Form Section */}
            <Flex
              ml={{ md: "-58px", base: "0px" }}
              gap="20px" // Reduced gap between elements
              position="relative"
              bg="white.a700"
              boxShadow="xs"
              w={{ md: "40%", base: "100%" }}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              px={{ md: "40px", base: "16px" }} // Reduced horizontal padding
              py={{ md: "80px", base: "12px", sm: "16px" }} // Reduced vertical padding
            >
              <Text>Fill Your Inputs</Text>
              <Flex
                gap="24px" // Reduced gap between form fields
                w={{ md: "92%", base: "100%" }}
                flexDirection="column"
              >
                <Flex gap="12px" flexDirection="column" alignItems="flex-start">
                  <Text size="textmd">Full Name</Text>
                  <Input
                    size="md" // Reduced size of inputs
                    placeholder={`Your Name`}
                    type="text"
                    fontFamily="Stigfier"
                    alignSelf="stretch"
                  />
                </Flex>
                <Flex gap="12px" flexDirection="column" alignItems="flex-start">
                  <Text size="textmd">Phone</Text>
                  <Input
                    placeholder={+255}
                    fontFamily="Stigfier"
                    alignSelf="stretch"
                  />
                </Flex>
                <Flex gap="12px" flexDirection="column" alignItems="flex-start">
                  <Text size="textmd">Password</Text>
                  <Input
                    placeholder={`********`}
                    type="password"
                    fontFamily="Stigfier"
                    alignSelf="stretch"
                  />
                </Flex>
                <Flex gap="12px" flexDirection="column" alignItems="flex-start">
                  <Text size="textmd">Confirm Password</Text>
                  <Input
                    placeholder={`********`}
                    type="password"
                    fontFamily="Stigfier"
                    alignSelf="stretch"
                  />
                </Flex>
                <Button
                  size="sm" // Reduced button size
                  color="gray.50"
                  fontFamily="Stigfier"
                  textTransform="capitalize"
                  minw="116px"
                  borderRadius="5px"
                >
                  Register
                </Button>
              </Flex>
            </Flex>

            {/* Content Section */}
            <Flex
              mb="0px"
              gap="2px"
              zIndex={1}
              alignSelf="flex-end"
              w={{ md: "60%", base: "100%" }}
              position="relative"
              flexDirection="column"
              px={{ md: 0, base: "20px" }}
            >
              <Text size="text4xl" lineHeight="60px">
                Celebrating Love, One Frame at a Time
              </Text>
              <Text
                size="textxs"
                color="black.900_cc"
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
          </Flex>
        </Box>
      </Box>
    </>
  );
}
