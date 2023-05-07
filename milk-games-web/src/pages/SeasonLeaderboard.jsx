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
  return (
    <PaginationTable headers={headers} data={data} />
    // <TableContainer>
    //   <Table variant="simple">
    //     <Thead>
    //       <Tr>
    //         <Th w="100%">Player</Th>
    //         <Th minW="55px" isNumeric>
    //           Tournaments
    //         </Th>
    //         <Th
    //           minW="30px"
    //           isNumeric
    //           display={{ base: 'none', sm: 'table-cell' }}
    //         >
    //           Matches
    //         </Th>
    //         <Th minW="30px" isNumeric>
    //           Points
    //         </Th>
    //         <Th
    //           minW="30px"
    //           isNumeric
    //           display={{ base: 'none', sm: 'table-cell' }}
    //         >
    //           Avg
    //         </Th>
    //       </Tr>
    //     </Thead>
    //     <Tbody>
    //       <Tr>
    //         <Td className="key-cell">Bing</Td>
    //         <Td isNumeric>1</Td>
    //         <Td isNumeric display={{ base: 'none', sm: 'table-cell' }}>
    //           2
    //         </Td>
    //         <Td isNumeric>3</Td>
    //         <Td isNumeric display={{ base: 'none', sm: 'table-cell' }}>
    //           {(3 / 1).toFixed(1)}
    //         </Td>
    //       </Tr>
    //     </Tbody>
    //     <Tfoot>
    //       <Tr></Tr>
    //     </Tfoot>
    //   </Table>
    // </TableContainer>
  );
};

export default SeasonLeaderboard;
