import { IconButton, Image, Button, Text, Flex, Container, Box } from "@chakra-ui/react";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <Box mt="174px">
        <Box bg="gray.400">
          <Flex
            h={{ md: "804px", base: "auto" }}
            bgImage="url(images/img_group_4.png"
            bgSize="cover"
            bgRepeat="no-repeat"
            justifyContent="center"
            alignItems="flex-start"
            py={{ md: "180px", base: "16px", sm: "20px" }}
          >
            <Container mb="62px" display="flex" justifyContent="center" px={{ md: "0px", base: "20px" }}>
              <Flex w="100%" alignItems="center" flexDirection={{ md: "row", base: "column" }}>
                <Flex
                  gap={{ md: "72px", base: "36px", sm: "54px" }}
                  w={{ md: "72%", base: "100%" }}
                  flexDirection="column"
                >
                  <Text size="text3xl" color="white.a700" w={{ md: "58%", base: "100%" }} lineHeight="45%">
                    Every Love Story is Beautiful, We Make Yours Unforgettable
                  </Text>
                  <Flex gap={{ base: "30px", sm: "60px" }} flexDirection="column" alignItems="flex-start">
                    <Text size="textxs" color="white.a700_cc" w={{ md: "62%", base: "100%" }} lineHeight="30px">
                      But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was 
                      born and I will give you a complete account account of the system, and expound th of the system,
                    </Text>
                  </Flex>
                  <Button size="lg" fontFamily="Stigfier" minW="250px" borderRadius="32px">
                    Contact Us
                  </Button>
                </Flex>
                <IconButton 
                  size="3xl"
                  colorScheme="gray_50_7f"
                  icon={<Image src="images/img_overflow_menu.svg" />}
                  aria-label="7:81-Menu Icon"
                  mb="78px"
                  alignSelf="flex-end"
                  w="74px"
                  borderRadius="36px"
                />
              </Flex>
            </Container>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
