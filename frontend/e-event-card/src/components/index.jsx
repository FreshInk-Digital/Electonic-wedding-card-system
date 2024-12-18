import { Text, IconButton, Image, Flex, Container } from "@chakra-ui/react";
import React from "react";

export default function UserProfile({
    timeZoneText = "But I must explain to you how",
    descriptionText = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
    aboutTheAppText = "About The App",
    ...props
}) {
    return (
        <Container
            {...props} 
            gap="42px"
            display="flex"
            bg="gray.500"
            flex={1}
            flexDirection="column" 
            alignItems="center"
            alignSelf="stretch"
            px={{ md: "56px", base: "16px", sm: "20px" }} 
            py={{ md: "60px", base: "16px", sm: "20px" }}
        >
            <Image
                src="images/img_frame_427320872.svg" 
                alt="Featured Image"
                h="70px"
                mr={{ md: "30px", base: "0px" }} 
                w="96%"
                fit="contain"
            />

            <Flex mb="52px" gap="48px" w="96%" flexDirection="column">
                <Flex gap="22px" flexDirection="column" alignItems="flex-start">
                    <Text fontSize="4xl" color="whiteAlpha.700">
                        {timeZoneText}
                    </Text>
                    <Text fontSize="lg" color="whiteAlpha.700" w={{ md: "54%", base: "100%" }} lineHeight="30px">
                        {descriptionText}
                    </Text>
                </Flex>
                <Flex gap="29px" alignItems="flex-start">
                    <IconButton
                        icon={<Image src="images/img_thumbs_up.svg" alt="Thumbs Up Icon" />} 
                        aria-label="Like Button" 
                        borderColor="whiteAlpha.700"
                        borderWidth="1px"
                        borderStyle="solid"
                        w="36px"
                        borderRadius="8px"
                    />
                    <Text fontSize="5xl" color="whiteAlpha.700" alignSelf="center">
                        {aboutTheAppText}
                    </Text>
                </Flex>
            </Flex>
        </Container>
    );
}
