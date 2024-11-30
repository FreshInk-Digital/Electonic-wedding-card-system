import { Helmet } from "react-helmet";
import Header from "components/Header";
import Footer from "components/Footer";
import HeroSection from "pages/Landing/HeroSection";
import LanguageSelectionSection from "components/LanguageSelectionSection";
import LoginSection from "./LoginSection";
import { Box, Image, Flex } from "@chakra-ui/react";
import React from "react";


export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Event Login - Start Planning Your Wedding</title>
        <meta 
          name="description"
          content="Login now to begain planning your dream wedding. Experience premium services, competitive prices, and make your love story unforgettable."
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
            {/* login section */}
            <LoginSection />
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
