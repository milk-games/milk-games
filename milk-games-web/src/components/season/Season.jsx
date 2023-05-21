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
import Header from '@components/common/header/Header';

import { SeasonService } from '@utils/api-service';
import { useState, useEffect } from 'react';
import { getColor } from '@utils/theme-utils';
import { TimeFormatter } from '@utils';
import TournamentCard from '@components/tournament/TournamentCard';
import SeasonLeaderboard from './SeasonLeaderboard';
import SectionHeading from '@components/common/section/SectionHeading';
import { useTheme } from '@emotion/react';

import bg from '@assets/bg1-small.png';
import Section from '@components/common/section/Section';
import { useLoaderData } from 'react-router-dom';

const Season = () => {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  /**
   * @type {[Season, Function]}
   */
  const season = useLoaderData();
  // const [season, setSeason] = useState({});
  // useEffect(() => {
  //   SeasonService.getCurrent().then(season => {
  //     setSeason(season);
  //   });
  // }, []);

  return (
    <Box w="100%">
      <Header />

      <Box h="80vh" maxH={{ base: '800px', md: '950px' }} position="relative">
        <Box
          bgImage={bg}
          bgRepeat="repeat"
          bgPosition="center"
          boxSize="100%"
          filter="grayscale(100%) opacity(40%)"
          position="absolute"
        />
        <Box
          bgGradient={`linear(to-b, rgba(0,0,0,0), ${getColor(
            'bg',
            colorMode
          )})`}
          boxSize="100%"
          position="absolute"
        />

        <Flex
          position="relative"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          h="100%"
        >
          <Box textAlign="center" py={4} px={{ base: 4, md: 4 }} rounded="lg">
            <Heading
              size={{ base: '3xl', md: '4xl' }}
              color={getColor('accent', colorMode)}
            >
              {season.name}
            </Heading>
            <Text fontSize={{ base: 'lg', md: '2xl' }} color="gray.500">
              {TimeFormatter.toMonthString(season.startDate) +
                ' — ' +
                TimeFormatter.toMonthString(season.endDate)}
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box mx="auto" w={{ base: '100%', md: '3xl' }} p={{ base: 4, md: 4 }}>
        <SectionHeading title="TOURNAMENTS" detail="Upcoming">
          <Text textAlign="justify">
            The upcoming tournaments of the season Keep track of the dates and
            times so you don't miss out on your chance to become the milk
            champion!
          </Text>

          <Button colorScheme="green" mt={4}>
            see all
          </Button>
        </SectionHeading>

        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          justifyItems="center"
          gap={4}
          mt={8}
        >
          {upcomingTournaments(season)}
        </Grid>
      </Box>

      <Section>
        <SectionHeading title="LEADERBOARD" detail="Top Players">
          <Button colorScheme="green" mt={4} mb={8}>
            see all
          </Button>
        </SectionHeading>
        <SeasonLeaderboard data={season.seasonPlayers} />
      </Section>

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
