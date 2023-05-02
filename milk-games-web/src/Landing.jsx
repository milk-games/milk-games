import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Header from './common/Header';
import HeaderV2 from './common/HeaderV2';
import Spill from './resources/spill.png';
import HeaderV3 from './common/HeaderV3';

const Landing = () => {
  return (
    <Box>
      <HeaderV3 />
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
