import { Box } from '@chakra-ui/react';
import Footer from '@components/common/footer/Footer';
import Header from '@components/common/header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <Box position="relative" minH="100vh">
      <Header />

      <Outlet />

      <Footer />
    </Box>
  );
};

export default Root;
