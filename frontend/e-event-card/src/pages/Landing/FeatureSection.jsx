import UserInterfaceSection from "components/UserInterfaceSection";
import { Flex, Text, IconButton, Image } from "@chakra-ui/react";
import React, { Suspense } from "react";

const eventManagementList = [
  {
    manageEventsText: "Manage Events",
    timeZoneText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I",
    iconPath: "images/icon_manage_events.svg", // Icon for Manage Events
  },
  {
    manageEventsText: "Track Contribution",
    timeZoneText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and",
    iconPath: "images/icon_track_contribution.svg", // Icon for Track Contribution
  },
  {
    manageEventsText: "Send Digital Invitation",
    timeZoneText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born",
    iconPath: "images/icon_send_invitation.svg", // Icon for Send Digital Invitation
  },
];

export default function FeatureSection() {
  return (
    <>
      {/* Feature section */}
      <Flex
        mt="58px"
        flexDirection="column"
        alignItems="center"
        px={{ md: "56px", base: "16px", sm: "20px" }}
      >
        {/* Title Section */}
        <Flex
          ml={{ md: "58px", base: "0px" }}
          pl="126px"
          pr="56px"
          gap="20px" // Keep gap for spacing between IconButton and Text
          bg="gray.500"
          w={{ md: "84%", base: "100%" }}
          alignItems="center" // Align items horizontally
          py={{ md: "74px", base: "16px", sm: "20px" }}
          px={{ md: 0, base: "16px", sm: "20px" }}
        >
          <IconButton
            icon={<Image src="images/img_thumbs_up.svg" />}
            aria-label="86:43-Like Button"
            borderColor="white.a700"
            borderWidth="1px"
            borderStyle="solid"
            w="36px"
            h="36px"
            borderRadius="8px"
            ml="90px"
          />
          <Text
            size="text2xl"
            color="white.a700"
            mr="20px" // Add additional left margin to move the title further right
          >
            Feature of The App
          </Text>
        </Flex>

        {/* Content Boxes */}
        <Flex
          ml={{ md: "58px", base: "0px" }}
          borderColor="gray.500"
          borderWidth="4px"
          borderStyle="solid"
          w={{ md: "84%", base: "100%" }}
          justifyContent="flex-start"
        >
          <Flex
            w="100%"
            flexDirection={{ md: "row", base: "column" }}
            gap="16px" // Reduced gap between individual boxes
            p="8px" // Reduced padding inside the container
          >
            <Suspense fallback={<div>Loading feed...</div>}>
              {eventManagementList.map((d, index) => (
                <UserInterfaceSection
                  {...d}
                  key={"televisionList" + index}
                  w={{ md: "28%", base: "100%" }} // Reduced width of each box
                  p="16px" // Smaller padding for content spacing
                  m="10px"
                  borderRightWidth={
                    index !== eventManagementList.length - 1 ? "2px" : "0px"
                  } // Add border-right to all except last
                />
              ))}
            </Suspense>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
