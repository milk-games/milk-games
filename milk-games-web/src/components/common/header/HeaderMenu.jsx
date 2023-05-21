import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { FaBars, FaHamburger } from 'react-icons/fa';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const HeaderMenu = () => {
  return (
    <Box>
      <ColorModeSwitcher justifySelf="flex-end" />

      <Menu>
        <MenuButton as={IconButton} icon={<FaBars />} colorScheme="green" />
        <MenuList zIndex={2}>
          <MenuItem> Profile </MenuItem>
          <MenuDivider />
          <MenuItem as="a" href="/season">
            Season
          </MenuItem>
          <MenuItem as="a" href="/tournaments">
            Tournaments
          </MenuItem>
          <MenuItem as="a" href="/players">
            Players
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default HeaderMenu;
