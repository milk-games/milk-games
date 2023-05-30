import { Box, Icon, MenuGroup, MenuItem } from '@chakra-ui/react';
import AuthContext from '@components/auth/AuthContext';
import { loginRedirect, roles } from '@utils/auth-utils';
import React, { useContext } from 'react';
import { BiLogIn, BiLogOut, BiUser } from 'react-icons/bi';
import { FaWrench } from 'react-icons/fa';

const UserMenu = () => {
  const { user, hasRole, logout } = useContext(AuthContext);

  if (!user) {
    return (
      <MenuGroup title="Profile" fontSize="md">
        <MenuItem onClick={loginRedirect}>
          <Icon as={BiLogIn} mr={2} /> Log in
        </MenuItem>
      </MenuGroup>
    );
  } else {
    return (
      <MenuGroup title="Profile" fontSize="md">
        <MenuItem as="a" href="/player">
          <Icon as={BiUser} mr={2} /> {user.name}
        </MenuItem>
        {hasRole(roles.ADMIN) && (
          <MenuItem as="a" href="/admin">
            <Icon as={FaWrench} mr={2} /> Admin
          </MenuItem>
        )}
        <MenuItem onClick={logout}>
          <Icon as={BiLogOut} mr={2} /> Log out
        </MenuItem>
      </MenuGroup>
    );
  }
};

export default UserMenu;
