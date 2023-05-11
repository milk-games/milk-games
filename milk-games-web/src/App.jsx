import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Landing from './Landing';
import theme from './theme';
import Season from './pages/season/Season';
import Tournament from './pages/tournament/Tournament';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Tournament />
    </ChakraProvider>
  );
}

export default App;
