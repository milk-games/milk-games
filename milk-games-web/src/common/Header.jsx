import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import logo from '../resources/logo.png';

const Header = () => {
  return (
    <Box
      height={{ base: '120px', sm: '250px' }}
      backgroundColor="logo"
      px={{ base: 8, sm: '24' }}
    >
      <Flex height="100%">
        <Center>
          <Image
            src={logo}
            boxSize={{ base: '100px', sm: '200px' }}
            style={{ transform: 'scaleX(-1)' }}
          />
        </Center>

        <Center
          flexDir="column"
          alignItems="left"
          ml={{ base: '-8', sm: '-14' }}
          mt={{ base: '8', sm: 16 }}
          zIndex={1}
        >
          <Heading
            mt={{ base: 0, sm: 4 }}
            fontSize={{ base: 'sm', sm: '4xl' }}
            overflowWrap="break-word"
            width={{ base: '60px', sm: '150px' }}
            lineHeight={{ base: 4, sm: 8 }}
          >
            Milk Games
          </Heading>
        </Center>
      </Flex>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    </Box>
  );
};

export default Header;
