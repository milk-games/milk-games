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

import Header from '@components/common/Header';
import SectionHeading from '@components/common/SectionHeading';

import { TournamentService } from '@utils/api-service';
import Bracket from './bracket/Bracket';

/**
 *
 * Teams
 * Bracket + matches
 *
 */

const Tournament = () => {
  const [dataInitialized, setDataInitialized] = useState(false);

  /**
   * @type {[Tournament, Function]}
   */
  const [tournament, setTournament] = useState();

  const { colorMode } = useColorMode();

  useEffect(() => {
    TournamentService.get(1).then(tournament => {
      setTournament(tournament);
      setDataInitialized(true);
    });
  }, []);

  return (
    <Box w="100%">
      <Header />

      <Box
        mt={24}
        mx="auto"
        w={{ base: '100%', md: '3xl', lg: '4xl' }}
        p={{ base: 4, md: 4 }}
      >
        <SectionHeading title="RULES"></SectionHeading>
        {/* Table of the teams? */}
        {/* List of all team cards */}
      </Box>

      <Box
        mt={24}
        mx="auto"
        w={{ base: '100%', md: '3xl', lg: '4xl' }}
        p={{ base: 4, md: 4 }}
      >
        <SectionHeading title="TEAMS"></SectionHeading>
        {/* Table of the teams? */}
        {/* List of all team cards */}
      </Box>

      <Box
        mt={24}
        mx="auto"
        w={{ base: '100%', md: '3xl', lg: '4xl' }}
        p={{ base: 4, md: 4 }}
        textAlign="center"
      >
        <SectionHeading title="BRACKET"></SectionHeading>
        {dataInitialized ? (
          <Bracket
            matches={tournament.matches}
            teamLimit={tournament.teamLimit}
          />
        ) : (
          <Spinner size="xl" m="36" p={4} />
        )}

        {/* <Bracket
          matches={tournament.matches}
          teamLimit={tournament.teamLimit}
        /> */}

        {/* Table of the teams? */}
        {/* List of all team cards */}
      </Box>

      <Box h="300px"></Box>
    </Box>
  );
};

export default Tournament;
