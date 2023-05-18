/**
 * @typedef {import("@types/index.d").Match} Match
 */

import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';
import BracketMatch from './BracketMatch';

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
  const [updatedMatches, setUpdatedMatches] = useState(matches);

  /**
   *
   * @param {Match} updatedMatch
   */
  const updateMatch = updatedMatch => {
    console.log(updatedMatch);
  };

  return (
    <Box
      boxSize={{ base: '100%', md: '800px' }}
      border="black"
      cursor="grab"
      p={4}
      position="relative"
    >
      <ScrollContainer
        className="scroll-container"
        style={{ height: '100%' }}
        ignoreElements=".bracket-team"
      >
        <Flex alignContent="flex-start">
          {createBracketMatches(matches, teamLimit).map(
            (bracketMatches, index) => (
              <Flex
                flexDir="column"
                maxW="200px"
                minW="200px"
                key={'round-' + index}
              >
                {bracketMatches.map(match => match)}
              </Flex>
            )
          )}
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

/* Helpers */

/**
 *
 * @param {Match[]} matches
 * @param {number} teamLimit
 */
function createBracketMatches(matches, teamLimit) {
  let numRounds = Math.log(teamLimit) / Math.log(2);

  /**
   * @type {[][]}
   */
  let roundMatches = [];

  matches.map(match => {
    const { round } = match.details;

    if (roundMatches[round - 1] == null) {
      roundMatches[round - 1] = [];
    }

    roundMatches[round - 1].push(
      <BracketMatch
        key={
          match.details.tournamentId +
          '-' +
          match.details.round +
          '-' +
          match.details.matchNum
        }
        match={match}
        teamLimit={teamLimit}
        numRounds={numRounds}
      />
    );
  });

  return roundMatches;
}
