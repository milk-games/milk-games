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
          {seasons.map((item, i) => (
            <Box textAlign="center" py={4} px={{ base: 4, md: 4 }} rounded="lg">
              <Heading
                size={{ base: '3xl', md: '4xl' }}
                color={getColor('accent', colorMode)}
              >
                {item.name}
              </Heading>
              <Text fontSize={{ base: 'lg', md: '2xl' }} color="gray.500">
                {TimeFormatter.toMonthString(item.startDate) +
                  ' — ' +
                  TimeFormatter.toMonthString(item.endDate)}
              </Text>
              <Button
            colorScheme="green"
            mt={4}
            onClick={() => navigate(`/seasons/${item.id}`)}
          >
            See more
          </Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Seasons;
