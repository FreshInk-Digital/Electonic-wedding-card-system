import { Text, IconButton, Image, Flex } from "@chakra-ui/react";
import React from "react";

export default function UserDashboard({
    manageEventsText = "Manage Events",
    timeZoneText = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
    ...props
}) {
    return (
        <Flex
            {...props}
            pl="60px"
            pr="56px"
            gap="50px"
            borderColor="gray.500"
            borderStyle="solid"
            w={{ md: "32%", base: "100%" }}
            flexDirection="column"
            alignItems="flex-start"
            py={{ base: "16px", sm: "40px" }}
            px={{ md: 0, base: "16px", sm: "20px" }}
        >
            <IconButton
                size="lg"
                icon={<Image src="images/img_television.svg" alt="Television Icon" />}
                aria-label="Television Icon"
                w="70px"
            />

            <Text fontSize="2xl" color="black.900_cc">
                {manageEventsText}
            </Text>
            <Text fontSize="lg" color="black.900_cc" w="100%" lineHeight="30px">
                {timeZoneText}
            </Text>
        </Flex>
    );
}
