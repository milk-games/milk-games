/**
 * @typedef {import("../../types/index.d").Tournament} Tournament
 */

import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Header from '@components/common/Header';
import { TournamentService } from '@utils/api-service';
import { getColor } from '@utils/theme-utils';
import SectionHeading from '@components/common/SectionHeading';
import Bracket from './bracket/Bracket';

/**
 *
 * Teams
 * Bracket + matches
 *
 */

const Tournament = () => {
  const { colorMode } = useColorMode();

  /**
   * @type {[Tournament, Function]}
   */
  const [tournament, setTournament] = useState({});

  /**
   * @type {[Match[], Function]}
   */
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    TournamentService.get(1).then(tournament => {
      setMatches(tournament.matches);
      setTournament(tournament);
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
      >
        <SectionHeading title="BRACKET"></SectionHeading>
        <Bracket matches={matches} teamLimit={tournament.teamLimit} />

        {/* Table of the teams? */}
        {/* List of all team cards */}
      </Box>

      <Box h="300px"></Box>
    </Box>
  );
};

export default Tournament;
