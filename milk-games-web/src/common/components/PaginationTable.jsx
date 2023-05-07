import React from 'react';
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

const PaginationTable = ({ headers, data = [] }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>{mapHeaders(headers)}</Thead>
        <Tbody>{data.map(row => mapRow(row, headers))}</Tbody>
        <Tfoot>
          <Tr></Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

/* Helpers */

function mapHeaders(headers) {
  if (!headers) return;
  return headers.map(header => (
    <Th key={header.name} {...header.style}>
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
          <Td key={header.name} {...header.style}>
            {value}
          </Td>
        );
      })}
    </Tr>
  );
}

export default PaginationTable;
