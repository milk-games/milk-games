import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Playground = () => {
  const variable = 'I am a javascript variable';

  return (
    <Box>
      <Box w="100%" textAlign="center" my={10}>
        <Heading>Playground</Heading>
      </Box>

      <Box w="100%" textAlign="center" my={10}>
        <Text> You can use "{'{variable}'}" to show a javascript variable</Text>
        <Text> {variable} </Text>
      </Box>

      <Box w="100%" textAlign="center" my={10}>
        <Text> You can also run any javascript within "{'{<js>}'}"</Text>
        <Text> 5 + 5 = {5 + 5} </Text>
      </Box>
    </Box>
  );
};

export default Playground;
