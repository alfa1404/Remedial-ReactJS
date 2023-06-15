import React from "react";
import { Box, Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <Box bg="blue.900" px={4} py={3} w="100%" color="white">
      <Flex justify="center" align="center">
        <ChakraLink as={RouterLink} _hover={{ textDecoration: "none" }} to="/">
          <Heading as="h1" size="lg" textAlign="center">
            Password Manager
          </Heading>
        </ChakraLink>
      </Flex>
    </Box>
  );
}

export default Header;
