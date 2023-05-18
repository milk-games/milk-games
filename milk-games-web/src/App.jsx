import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

import { AuthProvider } from '@components/auth/AuthContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
