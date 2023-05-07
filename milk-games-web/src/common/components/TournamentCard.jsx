import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Skeleton,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { getColor } from '../../utils/theme-utils';
import {
  FaCalendar,
  FaClock,
  FaMoneyBill,
  FaMoneyCheck,
  FaSkullCrossbones,
  FaUsers,
} from 'react-icons/fa';

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

  if (!tournament) return <TournamentSkeleton />;

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
    <Box
      rounded="md"
      bg="green.500"
      w={{ base: '250px' }}
      h="100%"
      onClick={() => {
        console.log('yeet');
      }}
      cursor="pointer"
      _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }}
      transition="transform 0.2s ease-out, box-shadow 0.2s ease-out"
    >
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

        <Box mx="auto" p="1">
          <HStack>
            <FaCalendar />
            <Text>{date}</Text>
          </HStack>
          <HStack>
            <FaClock />
            <Text>{time}</Text>
          </HStack>
          <HStack>
            <FaSkullCrossbones />
            <Text>{eliminationTypeString(tournament.eliminationType)}</Text>
          </HStack>
          <HStack>
            <FaMoneyBill />
            <Text>£{tournament.prizePool}</Text>
          </HStack>
          <HStack>
            <FaUsers />
            <Text>
              {tournament.teams.length} / {tournament.teamLimit}
            </Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default TournamentCard;

const TournamentSkeleton = () => (
  <Box rounded="md" bg="gray.300" w={{ base: '250px' }} h="100%">
    <Box roundedTop="md" h="100px" bg="gray.400"></Box>
    <Flex
      flexDir="column"
      color={getColor('header', 'light')}
      alignItems="center"
      fontSize="lg"
    >
      <Box bg="gray.500" h="30px" w="100%"></Box>

      <Box mx="auto" p={{ base: 2, md: 1 }}>
        <HStack rounded="sm" mt={{ base: 0, md: 1 }}>
          <Skeleton w="130px">
            <FaCalendar />
          </Skeleton>
        </HStack>
        <HStack rounded="sm" mt="2">
          <Skeleton w="75px">
            <FaClock />
          </Skeleton>
        </HStack>
        <HStack rounded="sm" mt="2">
          <Skeleton w="100px">
            <FaSkullCrossbones />
          </Skeleton>
        </HStack>
        <HStack rounded="sm" mt="2">
          <Skeleton w="60px">
            <FaMoneyBill />
          </Skeleton>
        </HStack>
        <HStack rounded="sm" mt="2">
          <Skeleton w="90px">
            <FaUsers />
          </Skeleton>
        </HStack>
      </Box>
    </Flex>
  </Box>
);

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
