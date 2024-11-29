import UserInterfaceSection from "components/UserInterfaceSection";
import { Flex, Text, IconButton, Image } from "@chakra-ui/react";
import React, { Suspense } from "react";

const eventManagementList = [
  {
    manageEventsText: "Manage Events",
    timeZoneText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I",
  },
  {
    manageEventsText: "Track Contribution",
    timeZoneText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and",
  },
  {
    manageEventsText: "Send Digital Invitation",
    timeZoneText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born",
  },
];

export default function FeatureSection() {
  return (
    <>
      {/* feature section */}
      <Flex mt="112px" flexDirection="column" alignItems="center" px={{ md: "56px", base: "16px", sm: "20px" }}>
        <Flex
          ml={{ md: "58px", base: "0px" }}
          pl="126px"
          pr="56px"
          gap="29px"
          bg="gray.500"
          w={{ md: "84%", base: "100%" }}
          alignItems="flex-end"
          py={{ md: "74px", base: "16px", sm: "20px" }}
          px={{ md: 0, base: "16px", sm: "20px" }}
        >
          <IconButton 
            icon={<Image src="images/img_thumbs_up.svg" />}
            aria-label="86:43-Like Button"
            mb="10px"
            borderColor="white.a700"
            borderWidth="1px"
            borderStyle="solid"
            w="36px"
            borderRadius="8px"
          />
          <Text size="text2xl" color="white.a700" mt="46px">
            Feature of The App
          </Text>
        </Flex>
        <Flex
          ml={{ md: "58px", base: "0px" }}
          borderColor="gray.500"
          borderWidth="4px"
          borderStyle="solid"
          w={{ md: "84%", base: "100%"}}
          justifyContent="center"
        >
          <Flex w="100%" flexDirection={{ md: "row", base: "column" }}>
            <Suspense fallback={<div>Loading feed...</div>}>
              {eventManagementList.map((d, index) => (
                <UserInterfaceSection {...d} key={"televisionList" + index} borderRightWidth="2px" />
              ))}
            </Suspense>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
