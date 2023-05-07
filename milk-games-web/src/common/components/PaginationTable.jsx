import React from 'react';
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const PaginationTable = ({ headers, data = [] }) => {
  return (
    <TableContainer>
      <Table color="background.light" border="none">
        <Thead bg="brown.900">{mapHeaders(headers)}</Thead>
        <Tbody bg="green.500">{data.map(row => mapRow(row, headers))}</Tbody>
      </Table>
      <Box bg="brown.900" w="100%" h="40px" p={2}>
        A
      </Box>
    </TableContainer>
  );
};

/* Helpers */

function mapHeaders(headers) {
  if (!headers) return;
  return headers.map(header => (
    <Th key={header.name} {...header.style} color="background.light">
      {header.name}
    </Th>
  ));
}

function mapRow(row, headers) {
  return (
    <Tr>
      {headers.map(header => {
        let value = row;
        if (header.key) {
          const keys = header.key.split('.');
          for (let key of keys) {
            value = value[key];
          }
        } else {
          value = header.fn(row);
        }

        return (
          <Td key={header.name} {...header.style} border="none">
            {value}
          </Td>
        );
      })}
    </Tr>
  );
}

export default PaginationTable;
