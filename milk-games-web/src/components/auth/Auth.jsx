import React, { useContext } from 'react';

import AuthContext from './AuthContext';
import { Box, Button } from '@chakra-ui/react';
import Section from '@components/common/section/Section';
import { roles } from '@utils/auth-utils';

const apiURL = process.env.REACT_APP_API_URL;
const auth = process.env.REACT_APP_AUTH_ENABLED;

const Auth = ({ isAdmin, children }) => {
  const { user, hasRole } = useContext(AuthContext);

  if (!user) {
    return <Section>You must log in to access this page</Section>;
  }

  if (isAdmin && hasRole(roles.ADMIN)) {
    return <Section>You do not have access to this page</Section>;
  }
  return <Box>{children}</Box>;
};

export default Auth;
