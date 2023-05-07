import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';

import '../styles/SeasonLeaderboard.css';
import PaginationTable from '../common/components/PaginationTable';

const headers = [
  {
    name: 'Player',
    key: 'player.name',
    style: {
      w: '100%',
    },
  },
  {
    name: 'Tournaments',
    key: 'tournamentsPlayed',
    style: {
      w: '100%',
    },
  },
  {
    name: 'Matches',
    key: 'matchesPlayed',
    style: {
      minW: '55px',
      display: { base: 'none', md: 'table-cell' },
    },
  },
  {
    name: 'Points',
    key: 'points',
    style: {
      w: '100%',
    },
  },
  {
    name: 'Avg',
    fn: ({ points, tournamentsPlayed }) =>
      tournamentsPlayed > 0 ? points / tournamentsPlayed : 0,
    style: {
      w: '100%',
      display: { base: 'none', md: 'table-cell' },
    },
  },
];

const SeasonLeaderboard = ({ data = [] }) => {
  return <PaginationTable headers={headers} data={data} />;
};

export default SeasonLeaderboard;
