import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Header from '@components/common/Header';

const Landing = () => {
  return (
    <Box>
      <Header />
      {/* <Box
        position="relative"
        overflowX="clip"
        display={{ base: 'none', lg: 'block' }}
      >
        <Image
          src={Spill}
          h="1000px"
          position="absolute"
          right="-300"
          top="-330"
          transform="rotate(-12deg)"
        />
      </Box> */}
    </Box>
  );
};

export default Landing;
