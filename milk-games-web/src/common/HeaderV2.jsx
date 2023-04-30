import {
  chakra,
  Box,
  Flex,
  Text,
  useColorMode,
  Center,
  Image,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../resources/logo.png';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Navigation from './Navigation';

const HeaderV2 = () => {
  const { colorMode } = useColorMode();

  return (
    <Box height={{ base: '120px', sm: '230px' }}>
      <Box className="header" w="100%" position="relative" h="100%">
        <Flex
          h="80%"
          align="center"
          alignItems="center"
          px={{ base: 4, sm: '24' }}
        >
          <Text fontSize="4xl" fontWeight="bold"></Text>
          <Center>
            <Image src={logo} h={{ base: '50px', sm: '100px' }} />
            <Heading
              mt={{ base: 0, sm: 4 }}
              ml={{ base: 4, sm: 4 }}
              fontSize={{ base: 'sm', sm: '4xl' }}
              overflowWrap="break-word"
              width={{ base: '60px', sm: '150px' }}
              lineHeight={{ base: 4, sm: 8 }}
            >
              Milk Games
            </Heading>
            <Navigation />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Center>
        </Flex>

        <chakra.svg
          className="header-wave"
          viewBox="0 0 1440 89"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          position="absolute"
          bottom="0"
        >
          <path d="M-1.5,36.5 C73,98.5 361,81.5 584,27.5 C807,-26.5 1049,8.5 1439.5,52.5 L1439.5,89.5 L-1.5,89.5 Z"></path>
        </chakra.svg>
      </Box>
    </Box>
  );
};

export default HeaderV2;
