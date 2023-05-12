import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';
import BracketMatch from './BracketMatch';

/**
 *
 * @param {Object} props
 * @param {Match[]} props.matches
 * @param {number} teamLimit
 */
const Bracket = ({ matches = [], teamLimit = 0 }) => {
  return (
    <Box boxSize="900px" border="black" cursor="grab" p={4}>
      <ScrollContainer className="scroll-container" style={{ height: '100%' }}>
        <Flex alignContent="flex-start">
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch
              match={matches[0] || {}}
              options={{ ...matches[0]?.details, teamLimit }}
            />
            <BracketMatch
              match={matches[1] || {}}
              options={{ ...matches[1]?.details, teamLimit }}
            />
            <BracketMatch
              match={matches[2] || {}}
              options={{ ...matches[2]?.details, teamLimit }}
            />
            <BracketMatch
              match={matches[3] || {}}
              options={{ ...matches[3]?.details, teamLimit }}
            />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch
              match={matches[4] || {}}
              options={{ ...matches[4]?.details, teamLimit }}
            />
            <BracketMatch
              match={matches[5] || {}}
              options={{ ...matches[5]?.details, teamLimit }}
            />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch
              match={matches[6] || {}}
              options={{ ...matches[6]?.details, teamLimit }}
            />
          </Flex>
          {/* <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch />
            <BracketMatch />
            <BracketMatch />
            <BracketMatch />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch />
            <BracketMatch />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch />
          </Flex> */}
        </Flex>
        {/* Loser bracket
        <Flex alignContent="flex-start" h="30%">
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch />
            <BracketMatch />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch />
            <BracketMatch />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch />
          </Flex>
        </Flex> */}
      </ScrollContainer>
    </Box>
  );
};

export default Bracket;
