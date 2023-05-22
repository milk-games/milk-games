import React, { useContext } from 'react';

import AuthContext from './AuthContext';
import { Box, Button } from '@chakra-ui/react';

const apiURL = process.env.REACT_APP_API_URL;
const auth = process.env.REACT_APP_AUTH_ENABLED;

const Auth = ({ children }) => {
  const { user, login, logout } = useContext(AuthContext);
  console.log({auth});
  if (!user) {
    return (
      <Box>
        You must log in
        <Button
          onClick={() =>
            auth
              ? (window.location.href = apiURL + window.location.pathname)
              : login({ name: 'User', id: '123', roles: ['ADMIN'] })
          }
        >
          Login
        </Button>
      </Box>
    );
  } else {
    return (
      <Box>
        {children}
        <Button onClick={() => logout()}>Logout</Button>
      </Box>
    );
  }
};

export default Auth;
