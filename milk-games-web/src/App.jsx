import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Tournament from '@components/tournament/Tournament';

import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Tournament />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
