import React, { useState } from "react";
import {
  Image,
  Button,
  Input,
  Box,
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";
import Select from "react-select";

// Define the country data manually
const countries = [
  {
    name: "TZ",
    phoneCode: "255",
    flag: "https://flagcdn.com/w320/tz.png",
  },
  {
    name: "KE",
    phoneCode: "254",
    flag: "https://flagcdn.com/w320/ke.png",
  },
  {
    name: "UG",
    phoneCode: "256",
    flag: "https://flagcdn.com/w320/ug.png",
  },
  {
    name: "RW",
    phoneCode: "250",
    flag: "https://flagcdn.com/w320/rw.png",
  },
  {
    name: "BI",
    phoneCode: "257",
    flag: "https://flagcdn.com/w320/bi.png",
  },
];

// Create country options for the dropdown
const countryOptions = countries.map((country) => ({
  label: (
    <Flex alignItems="center" gap="8px">
      <Image src={country.flag} alt={country.name} boxSize="20px" />
      <Text size="texts">{`${country.name}`}</Text>
    </Flex>
  ),
  value: country.phoneCode,
}));

export default function RegisterSection() {
  const [selectedCountryCode, setSelectedCountryCode] = useState("255");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handle country code selection
  const handleCountryChange = (selectedOption) => {
    setSelectedCountryCode(selectedOption.value);
  };

  // Handle phone number input
  const handlePhoneChange = (event) => {
    const input = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (input.length <= 9) {
      setPhoneNumber(input);
    }
  };

  // Format phone number with dash placeholders
  const formatPhoneNumber = (phone) => {
    const paddedPhone = phone.padEnd(9, "_"); // Add dashes to fill up to 9 digits
    return paddedPhone
      .split("")
      .map((char, index) => (index < phone.length ? char : "_"))
      .join("");
  };

  return (
    <>
      <Box>
        <Box>
          {/* Header Section */}
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
                  Register Now To Start <br />
                  Your Event Planning
                </Text>
                <Flex
                  mb="14px"
                  gap="20px"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Text size="textmd" color="gray.50">
                    Lorem ipsum dolor sit amet,
                  </Text>
                  <Text
                    size="textxs"
                    color="white.a700"
                    w={{ md: "60%", base: "100%" }}
                    lineHeight="30px"
                  >
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born, and I will
                    give you a complete account of the system and expound it.
                  </Text>
                </Flex>
              </Flex>
            </Container>
          </Flex>

          {/* Form Section */}
          <Flex
            mt="-446px"
            position="relative"
            alignItems="center"
            mx={{ md: "80px", base: "0px" }}
            flexDirection={{ md: "row-reverse", base: "column" }}
          >
            <Flex
              ml={{ md: "-58px", base: "0px" }}
              gap="20px"
              position="relative"
              bg="white.a700"
              boxShadow="xs"
              w={{ md: "40%", base: "100%" }}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              px={{ md: "40px", base: "16px" }}
              py={{ md: "80px", base: "12px", sm: "16px" }}
            >
              <Text>Fill Your Inputs</Text>
              <Flex
                gap="24px"
                w={{ md: "92%", base: "100%" }}
                flexDirection="column"
              >
                {/* Full Name Field */}
                <Flex
                  gap="12px"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Text size="textmd">Full Name</Text>
                  <Input
                    size="md"
                    placeholder="Your Name"
                    type="text"
                    fontFamily="Stigfier"
                    alignSelf="stretch"
                  />
                </Flex>

                {/* Phone Field with Country Code Dropdown */}
                <Flex
                  gap="12px"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Text size="textmd">Phone Number</Text>
                  <Flex w="100%" gap="8px" alignItems="center">
                    {/* Country Code Dropdown */}
                    <Box flex="1">
                      <Select
                        options={countryOptions}
                        onChange={handleCountryChange}
                        defaultValue={{
                          label: (
                            <Flex alignItems="center" gap="8px">
                              <Image
                                src="https://flagcdn.com/w320/tz.png"
                                alt="Tanzania"
                                boxSize="20px"
                              />
                              <Text>Tanzania (+255)</Text>
                            </Flex>
                          ),
                          value: "+255",
                        }}
                      />
                    </Box>
                    {/* Phone Number Input */}
                    <Input
                      flex="3"
                      value={formatPhoneNumber(phoneNumber)}
                      onChange={handlePhoneChange}
                      fontFamily="Stigfier"
                      type="tel"
                      alignSelf="stretch"
                      placeholder="_ _ _ _ _ _ _ _ _"
                      textAlign="center"
                    />
                  </Flex>
                  {/* Display Selected Country Code */}
                  <Text size="textsm" mt="4px">
                    Selected Country Code: {selectedCountryCode}
                  </Text>
                </Flex>

                {/* Password Field */}
                <Flex
                  gap="12px"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Text size="textmd">Password</Text>
                  <Input
                    placeholder="********"
                    type="password"
                    fontFamily="Stigfier"
                    alignSelf="stretch"
                  />
                </Flex>

                {/* Confirm Password Field */}
                <Flex
                  gap="12px"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Text size="textmd">Confirm Password</Text>
                  <Input
                    placeholder="********"
                    type="password"
                    fontFamily="Stigfier"
                    alignSelf="stretch"
                  />
                </Flex>

                {/* Register Button */}
                <Button
                  size="sm"
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
