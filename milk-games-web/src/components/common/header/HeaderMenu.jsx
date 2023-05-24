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
import { useContext } from 'react';
import AuthContext from '@components/auth/AuthContext';
import UserMenu from './UserMenu';

const HeaderMenu = () => {
  return (
    <Box>
      <ColorModeSwitcher justifySelf="flex-end" />

      <Menu>
        <MenuButton as={IconButton} icon={<FaBars />} colorScheme="green" />
        <MenuList zIndex={2}>
          <UserMenu />
          <MenuDivider />
          <MenuItem as="a" href="/seasons">
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
