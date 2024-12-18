
import { Text, Flex, IconButton, Image } from "@chakra-ui/react"; 
import React from "react";

export default function EventDetails({
    eventTitle = "Ceremonial Events",
    eventDescription = "Request here to choose your event",
    proceedButtonText = "Click here to Proceed",
    ...props
}) {
        
    return ( 
        <Flex
            {...props}
            h={{ md: "366px", base: "auto" }} 
            gap={{ base: "32px", sm: "64px" }} 
            bgSize="cover"
            bgRepeat="no-repeat"
            bgImage={props.bgImage}
            w="120%"
            flexDirection="column"
            alignItems="flex-start"
            p="18px"
            borderRadius="12px"
        >

        <IconButton
            size="md"
            icon={<Image src="images/message-chat-circle.svg" />} 
            aria-label = "106:1125-Chat Button"
            w="48px"
            borderRadius="10px"
        />

        <Flex mb="12px" gap="20px" alignSelf="stretch" flexDirection="column"> 
            <Flex gap="14px" flexDirection="column" alignItems="flex-start">
                <Text color="white.a700_01">{eventTitle}</Text>
                <Text size="textmd" color="white.a700_01">
                    {eventDescription}
                </Text>
            </Flex>
            
            <Flex>
                <Text size="textmd" color="gray.500">
                  {proceedButtonText}
                </Text>
            </Flex>
        </Flex>
    </Flex>
);
}