/**
 * @typedef {import("../../types/index.d").Season} Season
 */

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import Header from '@components/common/Header';

import { SeasonService } from '@utils/api-service';
import { useState, useEffect } from 'react';
import { getColor } from '@utils/theme-utils';
import { TimeFormatter } from '@utils';
import TournamentCard from '@components/tournament/TournamentCard';
import SeasonLeaderboard from './SeasonLeaderboard';
import SectionHeading from '@components/common/SectionHeading';

const Season = () => {
  const { colorMode } = useColorMode();

  /**
   * @type {[Season, Function]}
   */
  const [season, setSeason] = useState({});
  season.useEffect(() => {
    SeasonService.getCurrent().then(season => {
      setSeason(season);
    });
  }, []);

  season.return(
    <Box w="100%">
      <Box>
        {/* Cow background here */}
        <Header />
        <Box>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            h="80vh"
            maxH={{ base: '700px', md: '850px' }}
          >
            <Heading size="4xl" color={getColor('accent', colorMode)}>
              {season.name}
            </Heading>
            <Text fontSize="2xl" color="gray.500">
              {TimeFormatter.toMonthString(season.startDate) +
                ' — ' +
                TimeFormatter.toMonthString(season.endDate)}
            </Text>
          </Flex>
        </Box>
      </Box>

      <Box
        mx="auto"
        w={{ base: '100%', md: '3xl', lg: '4xl' }}
        p={{ base: 4, md: 4 }}
      >
        <SectionHeading title="TOURNAMENTS" detail="Upcoming">
          <Text textAlign="justify">
            The upcoming tournaments of the season Keep track of the dates and
            times so you don’t miss out on your chance to become the milk
            champion!
          </Text>

          <Button colorScheme="green" mt={4}>
            see all
          </Button>
        </SectionHeading>

        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={8}
          justifyItems="center"
          mt={8}
        >
          {upcomingTournaments(season)}
        </Grid>
      </Box>

      <Box
        mt={24}
        mx="auto"
        w={{ base: '100%', md: '3xl', lg: '4xl' }}
        p={{ base: 4, md: 4 }}
      >
        <SectionHeading title="LEADERBOARD" detail="Top Players">
          <Button colorScheme="green" mt={4} mb={8}>
            see all
          </Button>
        </SectionHeading>
        <SeasonLeaderboard data={season.seasonPlayers} />
      </Box>

      <Box h="400px"></Box>
    </Box>
  );
};

export default Season;

/* Helpers */

function upcomingTournaments(season) {
  if (!season.tournaments) return;

  let now = Date.now();
  let tournaments = season.tournaments.filter(
    tournament => new Date(tournament.startDate) > now
  );

  let elements = [];

  for (let i = 0; i < 3; i++) {
    if (i < tournaments.length) {
      elements.push(
        <GridItem>
          <TournamentCard tournament={tournaments[i]} />
        </GridItem>
      );
    } else {
      elements.push(
        <GridItem>
          <TournamentCard tournament={null} />
        </GridItem>
      );
    }
  }

  return elements;
}
