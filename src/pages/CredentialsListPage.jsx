import { useEffect, useState } from "react";

import React from "react";
import {
  SimpleGrid,
  Heading,
  Flex,
  Button,
  Divider,
  Spacer,
  Box,
} from "@chakra-ui/react";
import CredentialsCard from "../components/CredentialsCard";
import { useNavigate } from "react-router-dom";

function CredentialsListPage() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3366/credentials");
      const data = await response.json();

      setCredentials(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handButonClick = (e) => {
    e.preventDefault();

    navigate("/credentials/add");
  };
  const handleClikDelete = async (id) => {
    try {
      await fetch(`http://localhost:3366/credentials/${id}`, {
        method: "DELETE",
      });

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box bg="teal.400" minH="100vh" p={4} color="white">
      <Flex my={4} mx={4}>
        <Heading color="black">Credentials</Heading>
        <Spacer />
        <Button colorScheme="blue" onClick={handButonClick}>
          Add
        </Button>
      </Flex>
      <Divider />
      <SimpleGrid column={3} spacing={4}>
        {credentials.length > 0 &&
          credentials.map((credential, index) => {
            return (
              <CredentialsCard
                key={index}
                credential={credential}
                onDelete={handleClikDelete}
              />
            );
          })}
      </SimpleGrid>
    </Box>
  );
}

export default CredentialsListPage;
