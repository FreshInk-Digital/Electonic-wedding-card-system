import React from "react";
import {
  Box,
  Text,
  Flex,
  BreadcrumbLink,
  Breadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";

export default function header() {
  return (
    <>
              <Box>
                <Flex
                  pl="256px"
                  pr="96px"
                  gap="18px"
                  bg="white"
                  flexDirection="column"
                  // alignItems="flex-start"
                  justifyContent="center"
                  py={{ base: "16px", sm: "32px" }}
                  px={{ md: 0, base: "16px", sm: "20px" }}
                  textAlign="center"
                  paddingBottom="5rem"
                >
                  <Breadcrumb
                    separator={
                      <Text color="#b2956d" fontSize="16px" fontWeight={400}>
                        /
                      </Text>
                    }
                    display="flex"
                    px = "200px "
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <BreadcrumbItem isCurrentPage>
                      <BreadcrumbLink href="#">
                        <Text size="md" color="gray.500" >
                          Make It Happen Today
                        </Text>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </Breadcrumb>
                  <Text fontSize="6xl" color="gray.900" letterSpacing="-0.96px">
                    We'd love to Plan With You
                  </Text>
                </Flex>
              </Box>
    </>
  );
}
