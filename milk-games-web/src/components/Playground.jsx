import {
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Button,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import bg from '@assets/background.png';
import { getColor } from '@utils/theme-utils';
import Header from './common/header/Header';

const Playground = () => {
  const variable = 'I am a javascript variable';

  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Header />
      Hello
    </Box>
  );
};

export default Playground;
