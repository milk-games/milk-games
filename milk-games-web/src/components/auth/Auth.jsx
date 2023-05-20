import React, { useContext } from 'react';

import AuthContext from './AuthContext';
import { Box, Button } from '@chakra-ui/react';

const apiURL = process.env.REACT_APP_API_URL;

const Auth = ({ children }) => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return (
      <Box>
        You must log in
        <Button
          onClick={() =>
            (window.location.href = apiURL + window.location.pathname)
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
