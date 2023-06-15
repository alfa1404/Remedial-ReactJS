import { useState } from "react";
import {
  Heading,
  VStack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function AddCredentialPage() {
  const navigate = useNavigate();

  const [nama, setName] = useState("");
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3366/credentials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: nama,
          url: url,
          username: username,
          password: password,
        }),
      });

      navigate("/credentials");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box bg="teal.400" minH="100vh" p={4} color="white">
      <VStack spacing={4} w="100%">
        <Heading as="h2" size="xl" color="black">
          Add New Credentials
        </Heading>
        <Box w="80%">
          <form onSubmit={handleSubmit}>
            <VStack>
              <FormControl>
                <FormLabel color="black">Nama</FormLabel>
                <Input
                  borderColor="black"
                  color="black"
                  type="text"
                  placeholder="please input name"
                  w="100%"
                  onChange={(e) => setName(e.target.value)}
                  value={nama}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="black">URL</FormLabel>
                <Input
                  borderColor="black"
                  color="black"
                  type="text"
                  placeholder="please input URL"
                  w="100%"
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="black">Username</FormLabel>
                <Input
                  borderColor="black"
                  color="black"
                  type="text"
                  placeholder="please input username"
                  w="100%"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="black">Password</FormLabel>
                <Input
                  borderColor="black"
                  color="black"
                  type="text"
                  placeholder="please input password"
                  w="100%"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </FormControl>
              <Button colorScheme="blue" w="100%" type="submit">
                Add Credentials
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
}

export default AddCredentialPage;
