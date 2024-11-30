import { Helmet } from "react-helmet";
import Header from "components/Header";
import Footer from "components/Footer";
import HeroSection from "pages/Landing/HeroSection";
import LanguageSelectionSection from "components/LanguageSelectionSection";
import RegisterSection from "./RegisterSection";
import { Box, Image, Flex } from "@chakra-ui/react";
import React from "react";


export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Event Registration - Start Planning Your Wedding</title>
        <meta 
          name="description"
          content="Register now to begain planning your dream wedding. Experience premium services, competitive prices, and make your love story unforgettable."
        />
      </Helmet>
      <Box 
        overflowX="scroll" 
        bg="gray.50" 
      >
        <Box>
          {/* language section */}
          <LanguageSelectionSection />

          {/* header section */}
          <Header />
          <Image 
            src="images/img_frame_427321538.png" 
            alt="Image" 
            h="10px" 
            mt="26px"
            w="100%" 
            fit="cover" 
          />

          <Flex
            mt="10px"
            gap={{ md: "76px", base: "38px", sm: "57px" }}
            flexDirection="column"
          >
            {/* registration section */}
            <RegisterSection />
          </Flex>

          {/* hero section */}
          <HeroSection />
          <Image src="images/img_frame_427321538.png" 
            alt="Image" 
            h="10px"
            mt="26px"
            w="100%"
            fit="cover"
          />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
