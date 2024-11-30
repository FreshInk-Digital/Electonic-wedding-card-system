import UserProfile from "components/UserProfile";
import { Flex, Container, Image, Box } from "@chakra-ui/react";
import React from "react";

export default function LandingContentSection() {
  return (
    <>
      {/* landing content section */}
      <Box id="landing-content">
        <Flex mt="58px" gap={{ base: "32px", sm: "64px" }} flexDirection="column" alignItems="center">
          <Image src="images/img_frame_427321538.png" alt="Image" h="10px" w="100%" fit="cover" />
          <Container 
            px={{ md: "0px", base: "20px" }}
            w={{ md: "74%", base: "100%" }}
          >
            <Flex gap="50px" flexDirection="column">
              <UserProfile />
              <UserProfile
                timeZoneText="But I must explain to you how"
                descriptionText="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the"
                aboutTheAppText="About the App"
              />
            </Flex>
          </Container>
        </Flex>
      </Box>
    </>
  );
}
