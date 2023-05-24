import { Box } from '@chakra-ui/react';
import React from 'react';

const Section = ({ children, ...rest }) => {
  return (
    <Box mx="auto" w={{ base: '100%', md: '3xl' }} pt={24} px={2} {...rest}>
      {children}
    </Box>
  );
};

export default Section;
