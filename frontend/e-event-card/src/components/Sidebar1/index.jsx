import { Image, Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
    const [collapsed, setCollapsed] = React.useState(false);

    // Function to toggle sidebar collapse/expand
    const collapseSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Box
            {...props}
            as={Sidebar}
            width="282px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            pt={{ base: "16px", sm: "32px" }}
            flexDirection="column"
            display={{ md: "flex", base: "none" }}
            borderColor="#eaecf0 !important"
            borderRightWidth="1px !important"
            borderStyle="solid !important"
            bg="white.a700_01"
            h="100vh"
            top="0px"
            overflow="auto"
            sx={{ position: "sticky !important" }}
        >
            {/* Header */}
            <Flex
                gap="22px"
                bg="white.a700_01"
                alignSelf="stretch"
                alignItems="center"
                px={{ base: "20px", sm: "26px" }}
            >
                <Image src="images/ring.svg" alt="Globe Image" h="16px" />
                <Text fontSize="md" color="black.900_01">
                    WEDAPP
                </Text>
            </Flex>

            {/* Menu Items */}
            <Box
                as={Menu}
                menuItemStyles={{
                    button: {
                        padding: "8px",
                        gap: "12px",
                        color: "#344053",
                        fontWeight: 400,
                        fontSize: "16px",
                        borderRadius: "6px",
                        "&:hover, &.ps-active": {
                            color: "#182230",
                            backgroundColor: "#f8f9fb !important",
                        },
                    },
                }}
                rootStyles={{
                    "& > ul": { gap: "4px" },
                }}
                mt="46px"
                display="flex"
                alignSelf="stretch"
                flexDirection="column"
                w="100%"
                px="16px"
            >
                <MenuItem icon={<Image src="images/dashbord.svg" alt="Home Icon" h="24px" w="24px" />}>
                    Dashboard
                </MenuItem>
                <MenuItem icon={<Image src="images/events.svg" alt="Chart Icon" h="24px" w="24px" />}>
                    Events
                </MenuItem>
                <MenuItem icon={<Image src="images/contribution.svg" alt="Presentation Icon" h="24px" w="24px" />}>
                    Contribution
                </MenuItem>
                <MenuItem icon={<Image src="images/invitiation.svg" alt="Layers Icon" h="24px" w="24px" />}>
                    Invitation Card
                </MenuItem>
                <MenuItem icon={<Image src="images/report.svg" alt="Pie Chart Icon" h="24px" w="24px" />}>
                    Reports
                </MenuItem>
                <MenuItem icon={<Image src="images/support.svg" alt="Search Icon" h="24px" w="24px" />}>
                    Support
                </MenuItem>
                <MenuItem icon={<Image src="images/settings.svg" alt="Settings Icon" h="24px" w="24px" />}>
                    Settings
                </MenuItem>
            </Box>

            {/* Footer (User Info and Logout) */}
            {!collapsed && (
                <Flex
                    mt="auto"
                    borderColor="blue_gray.50"
                    borderTopWidth="1px"
                    borderStyle="solid"
                    alignSelf="stretch"
                    justifyContent="center"
                    alignItems="flex-end"
                    mx="16px"
                    py="4rem"
                >
                    <Flex mt="24px" flex={1} px="8px">
                        <Box
                            h="40px"
                            w="40px"
                            borderColor="black.900_14"
                            borderWidth="0.75px"
                            borderStyle="solid"
                            borderRadius="20px"
                        />
                        <Flex
                            gap="2px"
                            flex={1}
                            flexDirection="column"
                            alignItems="flex-start"
                            px="12px"
                        >
                            <Text fontSize="sm" color="blue_gray.800">
                                Mercy Paul
                            </Text>
                            <Text fontSize="sm" color="blue_gray.700">
                                0711 223 111
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        mb="12px"
                        flexDirection="column"
                        alignItems="center"
                        p="8px"
                        borderRadius="8px"
                    >
                        <Image src="images/login.svg" alt="Logout Icon" h="20px" />
                    </Flex>
                </Flex>
            )}
        </Box>
    );
}
