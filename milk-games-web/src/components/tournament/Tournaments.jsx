/**
 * @typedef {import("@types/index.d").Tournament} Tournament
 */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '@actions/tournament';
import {
  Box,
  Flex,
  Heading,
  Spinner,
  Text,
  useColorMode,
} from '@chakra-ui/react';

import Header from '@components/common/header/Header';
import SectionHeading from '@components/common/section/SectionHeading';

import { TournamentService } from '@utils/api-service';
import Bracket from './bracket/Bracket';
import { useLoaderData } from 'react-router-dom';

/**
 *
 * Teams
 * Bracket + matches
 *
 */

const Tournaments = () => {
  const { colorMode } = useColorMode();
  /**
   * @type {Tournament}
   */
  const tournamentsPage = useLoaderData();

  console.log(tournamentsPage);

  return (
    <Box w="100%">
      <Header />
      hello
    </Box>
  );
};

export default Tournaments;
