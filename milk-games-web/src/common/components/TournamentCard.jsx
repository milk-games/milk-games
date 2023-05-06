import { Box, Flex, Image, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { getColor } from '../../utils/theme-utils';

/**
 * @typedef {Object} Tournament - A tournament entity
 * @property {string} name - The name of the tournament
 * @property {string} eliminationType - The name of the tournament
 * @property {Date} startDate - The start date of the tournament
 * @property {Date} endDate - The end date of the tournament
 * @property {number} prize - The prize amount of the tournament
 */

/**
 * @typedef {Object} TournamentCardProps - Props for the TournamentCard component
 * @property {Tournament} tournament - The tournament to display
 */

/**
 * Renders a card displaying information about a tournament
 * @param {TournamentCardProps} props - The component props
 * @returns {JSX.Element} - The JSX element representing the TournamentCard
 */
const TournamentCard = ({ tournament }) => {
  const { colorMode } = useColorMode();

  console.log({ tournament });

  const tournamentDate = new Date(tournament.startDate);
  const date = tournamentDate.toLocaleDateString('default', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const time = tournamentDate.toLocaleTimeString('default', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <Box rounded="md" bg="green.500" w={{ base: '250px' }} h="100%">
      <Box h="100px" textAlign="center" overflow="hidden" position="relative">
        <Image
          src="https://www.leagueoflegends.com/static/open-graph-2e582ae9fae8b0b396ca46ff21fd47a8.jpg"
          roundedTop="md"
          h="100%"
          w="100%"
          objectFit="cover"
        />
      </Box>
      <Flex
        flexDir="column"
        color={getColor('header', 'light')}
        textAlign="center"
        fontSize="lg"
      >
        <Box bg="brown.900">
          <Text fontSize="xl">{tournament.name || 'Unknown Name'}</Text>
        </Box>
        <Box p={1} textAlign="left" mx="auto">
          <Text>{date}</Text>
          <Text>{time}</Text>
          <Text>{eliminationTypeString(tournament.eliminationType)}</Text>
          <Text>£{tournament.prizePool}</Text>
          <Text>
            {tournament.teams.length} / {tournament.teamLimit}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TournamentCard;

/* helpers */

function eliminationTypeString(type) {
  switch (type) {
    case 'single':
      return 'Single';
    case 'double':
      return 'Double';
    default:
      return type;
  }
}
