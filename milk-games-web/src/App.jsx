import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Tournament from '@components/tournament/Tournament';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Tournament />
    </ChakraProvider>
  );
}

export default App;
