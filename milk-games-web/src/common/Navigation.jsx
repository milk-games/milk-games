import {
  IconButton,
  Box,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Drawer,
  Divider,
} from '@chakra-ui/react';
import React from 'react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

import { FiMenu } from 'react-icons/fi';

const Navigation = ({ children }) => {
  return (
    <Box>
      <DesktopNav display={{ base: 'none', lg: 'block' }}></DesktopNav>
      <MobileNav display={{ base: 'block', lg: 'none' }}></MobileNav>
    </Box>
  );
};

const DesktopNav = props => {
  return <Box {...props}></Box>;
};

const MobileNav = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box {...props}>
      <IconButton icon={<FiMenu />} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="sidebar">
          <DrawerCloseButton />
          <DrawerHeader className="sidebar">MILK GAMES</DrawerHeader>

          <DrawerBody className="sidebar">
            <Box></Box>
            <Divider borderColor="gray.500" />
            <Box>
              Toggle theme <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
          </DrawerBody>

          <DrawerFooter className="sidebar"></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navigation;
