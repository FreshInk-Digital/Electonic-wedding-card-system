import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import LandingContentSection from "./LandingContentSection";
import LandingPageMainSection from "./LandingPageMainSection";
import LandingPageMainSection1 from "./LandingPageMainSection1";
import LanguageSelectionSection from "./LanguageSelectionSection";
import {
  Box,
  Image,
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
          h="10px"
          mt="26px"
          w="100%"
          fit="cover"
        />

        {/* feature section */}
        <FeatureSection />
        <Image
          src="images/img_frame_427321538.png"
          alt="Image"
          h="10px"
          w="100%"
          mt="26px"
          fit="cover"
        />

        {/* footer section */}
        <Footer />
        
      </Box>
    </>
  );
}
