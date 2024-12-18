import React from "react";
import { DatePicker } from "../../components/DatePicker";
import {
  Button,
  Input,
  Box,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";

export default function Register() {
  return (
    <>
      {/* <Box overflowX="scroll" bg="gray.50" w="100%"> */}

            <Flex gap={{ base: "30px", sm: "60px" }} flex={1} flexDirection="column">
              <Flex mx={{ md: "148px", base: "0px" }}>
                <Box
                  bg="white"
                  boxShadow="sm"
                  w={{ md: "100%", base: "100%" }}
                  py="8px"
                  px={{ md: 0, base: "20px" }}
                >
                  <Box bg="white" px="20px">
                    <Flex gap="26px" justifyContent="flex-end">
                      <Box
                        color= "#616161"
                        fontFamily="Stigfier"
                        fontSize="16px"
                        gap="6px"
                        display="flex"
                        borderColor="blueGray.100"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="white"
                        boxShadow="md"
                        w="12%"
                        px="14px"
                        py="10px"
                        borderRadius="8px"
                      >
                        <Image
                            src="images/calendar.svg"
                            alt="Filter-lines"
                            h="20px"
                            w="20px"
                            fit="contain"
                          />
                        <DatePicker name="Date Picker" placeholder="Select dates" />
                      </Box>
                      <Button
                        size="sm"
                        bg="white"
                        color= "#616161"
                        colorScheme="whiteAlpha"
                        leftIcon={
                          <Image
                            src="images/strips.svg"
                            alt="Filter-lines"
                            h="20px"
                            w="20px"
                            fit="contain"
                          />
                        }
                        fontFamily="Stigfier"
                        gap="6px"
                        borderColor="blueGray.100"
                        borderWidth="1px"
                        borderStyle="solid"
                        minW="92px"
                        borderRadius="8px"
                      >
                        Filters
                      </Button>
                    </Flex>
                  </Box>
                  <Input
                    size="sm"
                    variant="flushed"
                    placeholder="Event Name"
                    type="text"
                    color="gray.800"
                    mt="8px"
                    letterSpacing="0.50px"
                    fontFamily="Stigfier"
                    mx={{ md: "70px", base: "0px" }}
                    w="75%"
                  />

                  <Input
                    size="lg"
                    variant="flushed"
                    placeholder="Location"
                    type="text"
                    color="gray.800"
                    mt="8px"
                    letterSpacing="0.50px"
                    fontFamily="Stigfier"
                    mx={{ md: "70px", base: "0px" }}
                    w="75%"
                  />

                  <Input
                    size="lg"
                    variant="flushed"
                    placeholder="Select Date"
                    type="text"
                    mt="8px"
                    letterSpacing="0.50px"
                    fontFamily="Stigfier"
                    mx={{ md: "70px", base: "0px" }}
                    w="75%"
                  />

                  <Input
                    size="lg"
                    variant="flushed"
                    placeholder="Contact Phone"
                    type="number"
                    mt="8px"
                    letterSpacing="0.50px"
                    fontFamily="Stigfier"
                    mx={{ md: "70px", base: "0px" }}
                    w="75%"
                  />

                  <Flex
                    mt="8px"
                    gap="14px"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    mx={{ md: "70px", base: "0px" }}
                  >
                    <Flex
                      gap="24px"
                      borderColor="blueGray.400"
                      borderWidth="1px"
                      borderStyle="dashed"
                      alignSelf="stretch"
                      justifyContent="center"
                      alignItems="center"
                      p={{ base: "16px", sm: "40px" }}
                      // mx={{ md: "0px", base: "0px" }}
                      w="90%"
                    >
                      <Image src="images/upload.svg" alt="upload" h="24px" />
                      <Text
                        fontSize="sm"
                        color="blueGray.400"
                        letterSpacing="0.50px"
                        alignSelf="flex-end"
                      >
                        Upload Additional File
                      </Text>
                    </Flex>

                    <Text fontSize="xs" color="blueGray.400" letterSpacing="0.50px">
                      Attach file. File size of your documents should not exceed 10MB.
                    </Text>
                  </Flex>

                  <Button
                    size="lg"
                    colorScheme="blue"
                    mt="8px"
                    letterSpacing="0.50px"
                    fontFamily="Stigfier"
                    textTransform="uppercase"
                    alignSelf="stretch"
                    mx={{ md: "70px", base: "0px" }}
                    w="75%"
                  >
                    Submit
                  </Button>
                  <Button
                    size="lg"
                    colorScheme="blue"
                    mt="38px"
                    mb="56px"
                    letterSpacing="0.50px"
                    fontFamily="Stigfier"
                    textTransform="uppercase"
                    alignSelf="stretch"
                    mx={{ md: "70px", base: "0px" }}
                    w="75%"
                  >
                    Edit
                  </Button>
                </Box>
              </Flex>
            </Flex>
      {/* </Box> */}
    </>
  );
}
