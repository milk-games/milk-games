import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowDown,
  FaArrowUp,
} from 'react-icons/fa';

const PaginationTable = ({ headers, data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortedData, setSortedData] = useState(data);
  const [sort, setSort] = useState({});

  useEffect(() => {}, [sortedData]);
  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const getLimit = () => {
    const limit = (page + 1) * rowsPerPage;
    return limit >= data.length ? data.length : limit;
  };

  const sortBy = header => {
    let newSort = { [header.key]: 0 };

    switch (sort[header.key]) {
      case 1:
        newSort[header.key] = 0;
        break;
      case -1:
        newSort[header.key] = 1;
        break;
      default:
        newSort[header.key] = -1;
        break;
    }

    setSort(newSort);

    if (newSort[header.key]) {
      let sorted = data.sort((rowA, rowB) => {
        let a = getRowValue(rowA, header);
        let b = getRowValue(rowB, header);

        if (a == b) {
          return 0;
        }

        return a < b ? newSort[header.key] * 1 : newSort[header.key] * -1;
      });
      setSortedData([...sorted]);
    }
  };

  return (
    <TableContainer color="bg.light">
      <Table border="none">
        <Thead bg="brown.900">
          <Tr>{mapHeaders(headers, sortBy, sort)}</Tr>
        </Thead>
        <Tbody bg="green.500" h="270px">
          {mapData(sortedData, headers, page, rowsPerPage)}
        </Tbody>
      </Table>
      <Flex
        bg="brown.900"
        w="100%"
        h="50px"
        py={2}
        px={3}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Box px={2}>
          <Text>
            {page * rowsPerPage + 1} - {getLimit()} of {data.length}
          </Text>
        </Box>
        <IconButton
          colorScheme="green"
          size="sm"
          mx={1}
          icon={<FaAngleLeft />}
          rounded="full"
          isDisabled={page === 0}
          onClick={prevPage}
        />
        <IconButton
          colorScheme="green"
          size="sm"
          mx={1}
          icon={<FaAngleRight />}
          rounded="full"
          isDisabled={(page + 1) * rowsPerPage > data.length}
          onClick={nextPage}
        />
      </Flex>
    </TableContainer>
  );
};

/* Helpers */

function getRowValue(row, header) {
  let value = row;
  const keys = header.key.split('.');

  if (value[keys[0]] != null) {
    for (let key of keys) {
      value = value[key];
    }
  } else if (header.fn) {
    value = header.fn(row);
  } else {
    value = null;
  }
  return value;
}

function mapHeaders(headers, sortBy, sort) {
  if (!headers) return;
  return headers.map(header => (
    <Th
      key={header.key}
      {...header.style}
      color="background.light"
      cursor="pointer"
      border="none"
      onClick={() => sortBy(header)}
    >
      <span>
        {header.name}
        {'  '}
        {getSortIcon(header.key, sort)}
      </span>
    </Th>
  ));
}

function mapRow(row, rowNum, headers) {
  return (
    <Tr key={rowNum}>
      {headers.map(header => {
        let value = getRowValue(row, header);

        return (
          <Td
            key={header.name}
            k={header.name}
            {...header.style}
            border="none"
            m="auto"
            verticalAlign="top"
          >
            {value}
          </Td>
        );
      })}
    </Tr>
  );
}

function mapData(data, headers, page, rowsPerPage) {
  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  return data.slice(start, end).map((row, rowNum) => mapRow(row, rowNum, headers));
}

function getSortIcon(key, sort) {
  if (sort[key]) {
    return sort[key] > 0 ? (
      <FaArrowDown style={{ display: 'inline', verticalAlign: 'middle' }} />
    ) : (
      <FaArrowUp style={{ display: 'inline', verticalAlign: 'middle' }} />
    );
  }
}

export default PaginationTable;
