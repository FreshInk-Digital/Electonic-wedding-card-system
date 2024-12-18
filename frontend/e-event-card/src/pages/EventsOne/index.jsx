import React from "react";
import { Helmet } from "react-helmet";
import Sidebar1 from "../../components/Sidebar1";
import Footer from "../../components/Footer";
import Header from "../../components/DashboardHeader/header";
import Register from "./register";
import Events from "./events";
import { Box, Flex } from "@chakra-ui/react";
import LanguageSelectionSection from "../../components/LanguageSelectionSection";

export default function EventsOnePage() {
  return (
    <>
      <Helmet>
        <title>Event Details - Customize Your Event Experience</title>
        <meta
          name="description"
          content="Tailor your event with specific dates, locations, and additional details. Submit your preferences and let us plan with you."
        />
      </Helmet>

      <Box bg="gray.50" w="100%">
        {/* Language selection section */}
        <LanguageSelectionSection />       

        {/* Page Layout */}
        <Flex>
          {/* Sidebar */}
          <Box>
            <Sidebar1 />
          </Box>

          {/* Main Content Area */}
          <Box flex="1">
            <Header />
            {/* Content Below Header */}
            <Box mt="24" mb='24'>
              {/* <Register /> */}
              <Events />
            </Box>
          </Box>
        </Flex>

        {/* Footer */}
        <Footer id="footer" />
      </Box>
    </>
  );
}
