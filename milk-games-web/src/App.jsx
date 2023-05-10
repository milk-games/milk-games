import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Landing from './Landing';
import theme from './theme';
import Season from './pages/Season';
import Tournament from './pages/Tournament';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Tournament />
    </ChakraProvider>
  );
}

export default App;
