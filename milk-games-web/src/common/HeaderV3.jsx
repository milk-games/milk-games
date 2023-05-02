import {
  chakra,
  Box,
  Flex,
  useColorMode,
  Heading,
  Image,
  Button,
} from '@chakra-ui/react';
import React from 'react';

import waves from '../resources/waves.svg';
import shading from '../resources/shading.svg';
import shadow from '../resources/Shadow.svg';
import highlight from '../resources/Highlight.svg';
import logo from '../resources/logo.png';
import { getColor } from '../util/theme-utils';
import MilkButton from './components/MilkButton';

const HeaderV3 = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      flexDir="column"
      fill={getColor('header', colorMode)}
      className="header"
    >
      <Flex p={16} alignItems="center" h="200px">
        <Image src={logo} h="100px" />
        <Flex flexDir="column">
          <Heading size="lg" fontFamily="heading">
            Milk
          </Heading>
          <Heading size="lg">Games</Heading>
        </Flex>
      </Flex>

      <Box>
        <chakra.svg
          className="header-wave"
          viewBox="0 1 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          position="absolute"
        >
          <path d="M0 33.8204V0H1441V33.8204C1426 33.8204 1393.33 60.1306 1358 60.5739C1321.18 61.036 1300.33 39.9306 1264 33.8204C1149.29 14.5252 1089.77 102.463 973.501 99.947C867.301 97.6489 846.58 9.03842 740.5 14.6387C687.803 17.4208 629.765 61.3184 577.001 60.5739C527.678 59.878 502.726 37.0155 453.5 33.8204C360.314 27.7721 313.372 87.0262 220 85.8131C131.77 84.6667 21.4998 34.83 0 33.8204Z" />
        </chakra.svg>
      </Box>
    </Flex>
  );
};

export default HeaderV3;
