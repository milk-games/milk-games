import { Box, Flex } from '@chakra-ui/react';
import Footer from '@components/common/footer/Footer';
import Header from '@components/common/header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <Box minH="100vh">
      <Flex flexDir="column" minH="inherit">
        <Header />

        <Box minH="75vh">
          <Outlet />
        </Box>

        <Footer />
      </Flex>
    </Box>
  );
};

export default Root;
