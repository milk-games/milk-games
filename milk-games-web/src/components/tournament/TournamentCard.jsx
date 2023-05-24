/**
 * @typedef {import("@types/index.d").Tournament} Tournament
 */

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
import { getColor } from '@utils/theme-utils';
import {
  FaCalendar,
  FaClock,
  FaMoneyBill,
  FaSkullCrossbones,
  FaUsers,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import bg from '@assets/KowArmy.png';

/**
 * Renders a card displaying information about a tournament
 * @param {Object} props - The component props
 * @param {Tournament} props.tournament
 */
const TournamentCard = ({ tournament }) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

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
      position="relative"
      // overflow="hidden"
      rounded="md"
      bg="green.500"
      w="220px"
      h="100%"
      m={3}
      onClick={() => navigate('/tournaments/' + tournament.id)}
      cursor="pointer"
      _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }}
      transition="transform 0.2s ease-out, box-shadow 0.2s ease-out"
      _before={{
        content: '""',
        position: 'absolute',
        bgImage: bg,
        bgPosition: 'left',
        bgSize: '50%',
        bgRepeat: 'repeat',
        filter: 'grayscale(75%) opacity(15%)',
        top: 0,
        left: 0,
        w: '100%',
        h: '100%',
      }}
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
        position="relative"
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
  <Box rounded="md" bg="gray.300" w="220px" h="100%" m={3}>
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
