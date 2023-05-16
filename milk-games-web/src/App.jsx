import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

import Tournament from '@components/tournament/Tournament';
import Auth from '@components/auth/Auth';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
