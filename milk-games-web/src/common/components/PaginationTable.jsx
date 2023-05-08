import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PaginationTable = ({ headers, data = [] }) => {
  const [page, setPage] = useState(0);

  return (
    <TableContainer>
      <Table color="background.light" border="none">
        <Thead bg="brown.900">{mapHeaders(headers)}</Thead>
        <Tbody bg="green.500">{data.map(row => mapRow(row, headers))}</Tbody>
      </Table>
      <Flex bg="brown.900" w="100%" h="50px" py={2} px={3} justifyContent="flex-end" alignItems="center">
        
        <IconButton size="sm" mx={1} icon={<FaAngleLeft/>} rounded="full"/>
        <IconButton size="sm" mx={1} icon={<FaAngleRight/>} rounded="full"/>
      </Flex>
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
