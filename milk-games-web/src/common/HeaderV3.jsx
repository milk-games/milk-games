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
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const HeaderV3 = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      flexDir="column"
      fill={getColor('header', colorMode)}
      className="header"
    >
      <Flex p={16} alignItems="center" h={{ base: '100px', md: '200px' }}>
        <Image src={logo} h="100px" />
        <Flex flexDir="column">
          <Heading size="lg" fontFamily="heading">
            Milk
          </Heading>
          <Heading size="lg">Games</Heading>
        </Flex>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>

      <Box>
        <chakra.svg
          className="header-wave"
          viewBox="0 0 1440 108"
          xmlns="http://www.w3.org/2000/svg"
          w="100%"
          h="70px"
          preserveAspectRatio="none"
          position="absolute"
        >
          <chakra.path
            d="M-1 43.8204V10H1440V60C1416.93 60 1408.42 75.1442 1385.74 78.5C1331.45 86.5345 1308.78 42.746 1253.88 38C1158.16 29.7254 1118.88 99.7921 1022.97 106.5C884.416 116.19 820.767 3.02838 683.538 21C605.64 31.2016 552.606 67.2217 465.243 62C425.003 59.5949 404.543 46.8458 364.297 44.5C273.47 39.206 224.042 101.072 138.431 90.5C80.0255 83.2877 61.258 43.8204 -1 43.8204Z"
            className="wave-1"
          />
          <chakra.path
            d="M-1 33.8204V0H1440V33.8204C1425 33.8204 1391.42 55.5801 1357 60.5739C1301.46 68.6317 1270.59 42.7062 1214.13 43C1115.69 43.5122 1088.77 102.463 972.501 99.947C866.301 97.6489 823.167 4.48463 715.084 15C656.747 20.6756 634.529 56.3076 576.001 60.5739C515.539 64.9812 484.943 34.5977 424.234 33.8204C330.929 32.6258 289.069 92.7819 195.844 89.5C114.302 86.6294 61.258 33.8204 -1 33.8204Z"
            className="wave-2"
          />
          <chakra.path
            d="M-1 24.6827V0H1440V24.6827C1425 24.6827 1391.42 40.5632 1357 44.2078C1301.46 50.0885 1270.59 31.1677 1214.13 31.3821C1115.69 31.7559 1088.77 74.779 972.501 72.9429C866.301 71.2657 845.768 7.58988 739.689 11.677C686.992 13.7074 628.765 44.7511 576.001 44.2078C526.678 43.6999 501.726 27.0145 452.5 24.6827C359.314 20.2685 313.422 63.502 219 62.6277C129.658 61.8004 61.258 24.6827 -1 24.6827Z"
            className="wave-3"
          />
        </chakra.svg>
      </Box>
    </Flex>
  );
};

export default HeaderV3;
