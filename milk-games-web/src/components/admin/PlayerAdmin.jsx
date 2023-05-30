/**
 *
 * @typedef {import("@types/index.d").Player} Player
 */

import {
  Box,
  Center,
  Checkbox,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Section from '@components/common/section/Section';
import React from 'react';

/**
 *
 * @param {Object} props
 * @param {[Player]} props.players
 */
const PlayerAdmin = ({ players }) => {
  return (
    <Box>
      <Section>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Tournament Game Options</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>ID</Th>
                <Th textAlign="center">Admin</Th>
              </Tr>
            </Thead>
            <Tbody>
              {players.map((player, i) => (
                <Tr key={i} cursor="pointer">
                  <Td>{player.name}</Td>
                  <Td>{player.id}</Td>
                  <Td textAlign="center">
                    <Checkbox />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Section>
    </Box>
  );
};

export default PlayerAdmin;
