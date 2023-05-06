import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Landing from './Landing';
import theme from './theme';
import Season from './pages/Season';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Season />
    </ChakraProvider>
  );
}

export default App;
