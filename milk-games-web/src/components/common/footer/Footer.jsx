import { Box, useColorMode } from '@chakra-ui/react';
import { getColor } from '@utils/theme-utils';
import React from 'react';

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box w="100%" h="300px" mt={24} bg={getColor('bg.bg2', colorMode)}></Box>
  );
};

export default Footer;
