import React from 'react';

import '@assets/styles/SeasonLeaderboard.css';
import PaginationTable from '@components/common/PaginationTable';

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
      isNumeric: true,
    },
  },
  {
    name: 'Matches',
    key: 'matchesPlayed',
    style: {
      minW: '55px',
      display: { base: 'none', md: 'table-cell' },
      isNumeric: true,
    },
  },
  {
    name: 'Points',
    key: 'points',
    style: {
      w: '100%',
      isNumeric: true,
    },
  },
  {
    name: 'Avg',
    key: 'avg',
    fn: ({ points, tournamentsPlayed }) =>
      tournamentsPlayed > 0 ? points / tournamentsPlayed : points,
    style: {
      w: '100%',
      display: { base: 'none', md: 'table-cell' },
      isNumeric: true,
    },
  },
];

const SeasonLeaderboard = ({ data = [] }) => {
  return <PaginationTable headers={headers} data={data} />;
};

export default SeasonLeaderboard;
