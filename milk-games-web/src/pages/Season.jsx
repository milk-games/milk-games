import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import HeaderV3 from '../common/HeaderV3';

import { SeasonService } from '../utils/api-service';
import { useState, useEffect } from 'react';
import { getColor } from '../utils/theme-utils';
import { TimeFormatter } from '../utils';
import TournamentCard from '../common/components/TournamentCard';

const Season = () => {
  const { colorMode } = useColorMode();

  const [season, setSeason] = useState({});

  useEffect(() => {
    SeasonService.getCurrent().then(season => {
      console.log({ season });
      setSeason(season);
    });
  }, []);

  /**
   * Get upcoming matches
   * Get leaderboard
   */

  return (
    <Box w="100%">
      <Box>
        {/* Cow background here */}
        <HeaderV3 />
        <Box>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            h="80vh"
            maxH={{ base: '650px', md: '850px' }}
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
        className="content"
        mx="auto"
        w={{ base: 'lg', md: '3xl', lg: '4xl' }}
      >
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap="48"
          rowGap={0}
        >
          <GridItem textAlign={{ md: 'right' }} mb={-2}>
            <Text fontSize="xl" letterSpacing={2}>
              TOURNAMENTS
            </Text>
          </GridItem>
          <GridItem />
          <GridItem textAlign={{ md: 'right' }}>
            <Text fontWeight="bold" fontSize="5xl" mt={-2}>
              Upcoming
            </Text>
          </GridItem>
          <GridItem verticalAlign="bottom">
            <Text textAlign="justify">
              The upcoming tournaments of the season Keep track of the dates and
              times so you don’t miss out on your chance to become the milk
              champion!
            </Text>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={8}
          justifyItems="center"
          mt={8}
        >
          {upcomingTournaments(season)}
        </Grid>
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

  console.log({ tournaments });

  for (let i = 0; i < 3; i++) {
    if (i < tournaments.length) {
      elements.push(
        <GridItem>
          <TournamentCard tournament={tournaments[i]} />
        </GridItem>
      );
    } else {
      elements.push(<GridItem>No tourney</GridItem>);
      // tournament skeleton
    }
  }

  return elements;
}
