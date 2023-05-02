import React from 'react';
import { Button, Image } from '@chakra-ui/react';
import shading from '../../resources/shading.svg';

const MilkButton = ({ children, ...rest }) => {
  return (
    <Button
      colorScheme="green"
      className="milk-button"
      overflow="hidden"
      boxShadow="base"
      {...rest}
    >
      <Image src={shading} position="absolute" h="100%" w="100%" />
      {children}
    </Button>
  );
};

export default MilkButton;
