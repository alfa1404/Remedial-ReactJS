import React from "react";
import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../assets/home.jpg";

function HomePage() {
  const navigate = useNavigate();

  const handleClickButton = (e) => {
    e.preventDefault();

    navigate("/credentials");
  };

  const containerStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "685px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "2rem",
    boxSizing: "border-box",
    textAlign: "center",
  };

  const contentStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "1rem",
    borderRadius: "0.5rem",
    marginTop: "250px",
    width: "85%",
    height: "200px",
  };

  const headingStyle = {
    color: "white",
    textAlign: "left",
    marginBottom: "1rem",
  };

  const buttonStyle = {
    marginTop: "1rem",
  };

  return (
    <Box style={containerStyle}>
      <Flex direction="column" alignItems="flex-start">
        <Box style={contentStyle}>
          <Heading as="h2" size="xl" style={headingStyle}>
            Welcome To Password Manager
          </Heading>
          <Button
            colorScheme="blue"
            onClick={handleClickButton}
            style={buttonStyle}
          >
            Get Started
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default HomePage;
