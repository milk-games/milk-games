/**
 * @typedef {import("@types/index.d").Match} Match
 * @typedef {import("@types/index.d").Team} Team
 */

import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import BracketTeam from './BracketTeam';
import { getColor } from '@utils/theme-utils';

import { isEqual } from 'lodash';
import MatchService from '@utils/api-service/MatchService';

/**
 *
 * @param {Object} props
 * @param {Match} props.match
 */
const BracketMatch = ({ match, teamLimit, updateMatch, ...rest }) => {
  const { colorMode } = useColorMode();

  const [dataInitialized, setDataInitialized] = useState(false);

  /**
   * @type {[Team, Function]}
   */
  const [team1, setTeam1] = useState(match.team1);

  /**
   * @type {[Team, Function]}
   */
  const [team2, setTeam2] = useState(match.team2);

  const [team1Points, setTeam1Points] = useState(match.team1Points);
  const [team2Points, setTeam2Points] = useState(match.team2Points);

  const updateState = (setter, value) => {
    setter(value);
  };

  useEffect(() => {
    setDataInitialized(true);
  }, []);

  useEffect(() => {
    if (dataInitialized) {
      const newMatch = { ...match, team1, team2, team1Points, team2Points };
      MatchService.update(newMatch);
    }
  }, [team1, team2, team1Points, team2Points]);

  return (
    <Flex
      flexDir="column"
      flexGrow={1}
      justifyContent="center"
      position="relative"
      p={4}
      maxW="100%"
      {...rest}
      {...getBracketLines(match.details, teamLimit)}
    >
      <Box
        textAlign="center"
        p={1}
        bg={getColor('bg.bg2', colorMode)}
        rounded="lg"
      >
        <BracketTeam
          team={team1}
          score={team1Points}
          scoreLimit={match?.scoreLimit || 1}
          setTeam={setTeam1}
          setScore={setTeam1Points}
          updateState={updateState}
        />
        <Text my={2}> vs </Text>
        <BracketTeam
          team={team2}
          score={team2Points}
          scoreLimit={match?.scoreLimit || 1}
          setTeam={setTeam2}
          setScore={setTeam2Points}
          updateState={updateState}
        />
      </Box>
    </Flex>
  );
};

function getBracketLines({ round, matchNum }, teamLimit) {
  let numRounds = Math.log(teamLimit) / Math.log(2);

  let _before = {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: 0,
    width: 4,
  };

  let _after = {
    content: '""',
    display: 'block',
    height: '50%',
    position: 'absolute',
    right: 0,
    width: 3.5,
  };

  if (round < numRounds) {
    if (matchNum % 2 == 0) {
      _after.borderBottom = 'solid';
      _after.borderRight = 'solid';
      _after.top = '0%';
    } else {
      _after.borderTop = 'solid';
      _after.borderRight = 'solid';
      _after.top = '50%';
    }
  }

  if (round > 1) {
    _before.borderTop = '2px solid';
  }

  let borderColor = 'brown.700';

  _before.borderColor = borderColor;
  _before.borderWidth = '2px';
  _after.borderColor = borderColor;
  _after.borderWidth = '2px';

  return { _before, _after };
}

export default BracketMatch;
