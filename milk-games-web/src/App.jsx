import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Landing from './Landing';
import theme from './theme';

function App() {
  console.log(theme);
  return (
    <ChakraProvider theme={theme}>
      <Landing />
    </ChakraProvider>
  );
}

export default App;
