import { Helmet } from "react-helmet";
import Header from "components/Header";
import Footer from "../../components/Footer";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import LandingContentSection from "./LandingContentSection";
import LandingPageMainSection from "./LandingPageMainSection";
import LanguageSelectionSection from "./LanguageSelectionSection";
import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Wedding Home - Explore premium wedding services</title>
        <meta
          name="description"
          content="Discover our premium wedding services and explore over 230+ themes. Celebrate love with unforgettable experiences and start planning your event today."
        />
      </Helmet>
      <Box overflowX="scroll" bg="gray.50" w="100%">
        {/* Language selection section */}
        <LanguageSelectionSection id="language-selection" />

        {/* Header main section */}
        <Header id="header" />
        <Image
          src="images/img_frame_427321538.png"
          alt="Separator Image"
          h="10px"
          w="100%"
          mt="26px"
          fit="cover"
        />

        {/* Landing page main section 1 */}
        <LandingPageMainSection id="main-section" />

        {/* Landing content section */}
        <LandingContentSection id="landing-content" />

        {/* Hero section */}
        <HeroSection id="hero" />
        <Image
          src="images/img_frame_427321538.png"
          alt="Separator Image"
          h="10px"
          mt="26px"
          w="100%"
          fit="cover"
        />

        {/* Feature section */}
        <FeatureSection id="features" />
        <Image
          src="images/img_frame_427321538.png"
          alt="Separator Image"
          h="10px"
          w="100%"
          mt="26px"
          fit="cover"
        />

        {/* Footer section */}
        <Footer id="footer" />
      </Box>
    </>
  );
}
