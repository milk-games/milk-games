import { Box } from '@chakra-ui/react';
import Header from '@components/common/header/Header';
import Section from '@components/common/section/Section';
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Player = () => {
  const user = useLoaderData();

  return <Section>{user.name}</Section>;
};

export default Player;
