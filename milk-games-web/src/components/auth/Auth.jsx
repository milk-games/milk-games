import React, { useContext } from 'react';

import AuthContext from './AuthContext';
import { Box, Button } from '@chakra-ui/react';
import Section from '@components/common/section/Section';

const apiURL = process.env.REACT_APP_API_URL;
const auth = process.env.REACT_APP_AUTH_ENABLED;

const Auth = ({ children }) => {
  const { user, login, logout } = useContext(AuthContext);
  if (!user) {
    return (
      <Section textAlign="center">
        <Box> You must log in </Box>
        <Button
          onClick={() =>
            auth
              ? (window.location.href = apiURL + window.location.pathname)
              : login({ name: 'User', id: '123', roles: ['ADMIN'] })
          }
        >
          Login
        </Button>
      </Section>
    );
  } else {
    return <Box>{children}</Box>;
  }
};

export default Auth;
