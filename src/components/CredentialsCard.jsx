import React from "react";
import { Box, VStack, Text, IconButton, HStack } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function CredentialsCard({ credential, onDelete }) {
  const navigate = useNavigate();

  return (
    <Box
      borderWidth={2}
      p={4}
      bg="blue.900"
      position="relative"
      w="60%"
      h={300}
      mx="auto"
      my={4}
      pt={20}
    >
      <VStack align="center" justifyContent="space-between">
        <Text textAlign="center">{credential.nama}</Text>
        <Text textAlign="center">{credential.url}</Text>
        <Text textAlign="center">Username: {credential.username}</Text>
        <Text textAlign="center">Password: {credential.password}</Text>
        <HStack justifyContent="space-between" w="100%" mt="auto">
          <IconButton
            icon={<EditIcon />}
            onClick={() => navigate(`/credentials/${credential.id}/edit`)}
            colorScheme="teal"
          />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => onDelete(credential.id)}
            colorScheme="teal"
          />
        </HStack>
      </VStack>
    </Box>
  );
}

export default CredentialsCard;
