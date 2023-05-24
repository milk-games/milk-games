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
import TournamentCard from './TournamentCard';
import Section from '@components/common/section/Section';

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
  const tournaments = useLoaderData();

  return (
    <Box w="100%" pb={24}>
      <Section>
        <SectionHeading title="TOURNAMENTS" />
        <Flex justifyContent="center">
          {tournaments.map(tournament => (
            <TournamentCard tournament={tournament} />
          ))}
        </Flex>
      </Section>
    </Box>
  );
};

export default Tournaments;
