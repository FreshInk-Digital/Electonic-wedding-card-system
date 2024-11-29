import UserProfile from "components/UserProfile";
import { Flex, Container, Image } from "@chakra-ui/react";
import React from "react";

export default function LandingContentSection() {
  return (
    <>
      {/* landing content section */}
      <Flex mt="58px" gap={{ base: "32px", sm: "64px" }} flexDirection="column" alignItems="center">
        <Image src="images/img_frame_427321538.png" alt="Image" h="16px" w="100%" fit="cover" />
        <Container px={{ md: "0px", base: "20px" }}>
          <Flex gap="52px" flexDirection="column">
            <UserProfile />
            <UserProfile
              timeZoneText="But I must explain to you how"
              descriptionText="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the"
              aboutTheAppText="About the App"
            />
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
