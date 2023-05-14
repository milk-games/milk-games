/**
 * @typedef {import("@types/index.d").Match} Match
 */

import { Box, Flex, IconButton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';
import BracketMatch from './BracketMatch';
import { useSelector } from 'react-redux';
import { FaSave } from 'react-icons/fa';

/**
 *
 * @param {Object} props
 * @param {Match[]} props.matches
 * @param {number} teamLimit
 */
const Bracket = ({ matches, teamLimit = 0 }) => {
  /**
   * @type {[Match[], Function]}
   */
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setMatches(matches);
  }, [matches]);

  /**
   *
   * @param {Match} updatedMatch
   */
  const updateMatch = updatedMatch => {
    matches.find(
      ({ details: { tournamentId, round, matchNum } }) =>
        tournamentId == updatedMatch.details.tournamentId &&
        round == updatedMatch.details.round &&
        matchNum == updatedMatch.details.matchNum
    );
  };

  return (
    <Box boxSize="900px" border="black" cursor="grab" p={4} position="relative">
      <IconButton
        icon={<FaSave />}
        colorScheme="green"
        position="absolute"
        boxSize="40px"
        right={8}
        top={8}
      />
      <ScrollContainer className="scroll-container" style={{ height: '100%' }}>
        <Flex alignContent="flex-start">
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch
              match={matchesRef.current[0] || {}}
              options={{ ...matchesRef.current[0]?.details, teamLimit }}
              updateMatch={match => updateMatch(0, match)}
            />
            <BracketMatch
              match={matchesRef.current[1] || {}}
              options={{ ...matchesRef.current[1]?.details, teamLimit }}
              updateMatch={match => updateMatch(1, match)}
            />
            <BracketMatch
              match={matchesRef.current[2] || {}}
              options={{ ...matchesRef.current[2]?.details, teamLimit }}
              updateMatch={match => updateMatch(2, match)}
            />
            <BracketMatch
              match={matchesRef.current[3] || {}}
              options={{ ...matchesRef.current[3]?.details, teamLimit }}
              updateMatch={match => updateMatch(3, match)}
            />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch
              match={matchesRef.current[4] || {}}
              options={{ ...matchesRef.current[4]?.details, teamLimit }}
              updateMatch={match => updateMatch(4, match)}
            />
            <BracketMatch
              match={matchesRef.current[5] || {}}
              options={{ ...matchesRef.current[5]?.details, teamLimit }}
              updateMatch={match => updateMatch(5, match)}
            />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch
              match={matchesRef.current[6] || {}}
              options={{ ...matchesRef.current[6]?.details, teamLimit }}
              updateMatch={match => updateMatch(6, match)}
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
