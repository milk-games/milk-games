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
  const [updatedMatches, setUpdatedMatches] = useState(matches);

  /**
   *
   * @param {Match} updatedMatch
   */
  const updateMatch = updatedMatch => {
    console.log(updatedMatch);

    // let match = matches.find(
    //   ({ details: { tournamentId, round, matchNum } }) =>
    //     tournamentId == updatedMatch.details.tournamentId &&
    //     round == updatedMatch.details.round &&
    //     matchNum == updatedMatch.details.matchNum
    // );

    // console.log({ match });
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
              match={updatedMatches[0] || {}}
              teamLimit={teamLimit}
              updateMatch={updateMatch}
            />
            <BracketMatch
              match={updatedMatches[1] || {}}
              teamLimit={teamLimit}
              updateMatch={updateMatch}
            />
            <BracketMatch
              match={updatedMatches[2] || {}}
              teamLimit={teamLimit}
              updateMatch={updateMatch}
            />
            <BracketMatch
              match={updatedMatches[3] || {}}
              teamLimit={teamLimit}
              updateMatch={updateMatch}
            />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch
              match={updatedMatches[4] || {}}
              teamLimit={teamLimit}
              updateMatch={updateMatch}
            />
            <BracketMatch
              match={updatedMatches[5] || {}}
              teamLimit={teamLimit}
              updateMatch={updateMatch}
            />
          </Flex>
          <Flex flexDir="column" maxW="200px" minW="200px">
            <BracketMatch
              match={updatedMatches[6] || {}}
              teamLimit={teamLimit}
              updateMatch={updateMatch}
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
