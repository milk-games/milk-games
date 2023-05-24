/**
 * @typedef {import("../../types/index.d").Season} Season
 */

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorMode,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import Header from '@components/common/header/Header';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import bg from '@assets/bg1-small.png';
import { getColor } from '@utils/theme-utils';
import { TimeFormatter } from '@utils';
import SectionHeading from '@components/common/section/SectionHeading';
import Section from '@components/common/section/Section';

const Seasons = () => {
  const { colorMode } = useColorMode();
  /**
   * @type {Season}
   */
  const seasons = useLoaderData();
  const navigate = useNavigate();

  return (
    <Box w="100%">
      <Header />

      <Box h="80vh" maxH={{ base: '800px', md: '950px' }} position="relative">
        <Box
          bgImage={bg}
          bgRepeat="repeat"
          bgPosition="center"
          boxSize="100%"
          filter="grayscale(100%) opacity(40%)"
          position="absolute"
        />
        <Box
          bgGradient={`linear(to-b, rgba(0,0,0,0), ${getColor(
            'bg',
            colorMode
          )})`}
          boxSize="100%"
          position="absolute"
        />

        <Flex
          position="relative"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          h="100%"
        >
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Past Milk Games Seasons</TableCaption>
              <Thead>
                <Tr>
                  <Th>Season Name</Th>
                  <Th>Start Date</Th>
                  <Th>End Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {seasons.map((item, i) => (
                  <Tr onClick={() => navigate(`/seasons/${item.id}`)} cursor="pointer">
                    <Td>{item.name}</Td>
                    <Td>{TimeFormatter.toMonthString(item.startDate)}</Td>
                    <Td>{TimeFormatter.toMonthString(item.endDate)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
    </Box>
  );
};

export default Seasons;
