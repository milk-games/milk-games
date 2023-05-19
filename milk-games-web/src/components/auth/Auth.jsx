import React, { useContext, useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

import AuthService from '@utils/api-service/AuthService';
import AuthContext from './AuthContext';
import PlayerService from '@utils/api-service/PlayerService';
import { Box, Button } from '@chakra-ui/react';

const authURL = process.env.REACT_APP_AUTH_URL;

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const { user, login, logout } = useContext(AuthContext);

  if (!user) {
    return (
      <Box>
        You must log in
        <Button
          onClick={() =>
            (window.location.href = authURL + window.location.pathname)
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

  // useEffect(() => {
  //   console.log({ user });
  //   if (!user) {
  //     window.location.href = authURL;
  //     return;
  //   }

  //   // const success = new URLSearchParams(window.location.search).get('success');
  //   // console.log({ success });
  //   // if (success) {
  //   //   navigate('/');
  //   //   return;
  //   // } else {
  //   //   window.location.href = authURL;
  //   //   return;
  //   // }
  // }, []);

  // return null;
};

export default Auth;
