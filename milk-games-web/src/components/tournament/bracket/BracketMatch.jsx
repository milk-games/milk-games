/**
 * @typedef {import("@types/index.d").Match} Match
 * @typedef {import("@types/index.d").Team} Team
 */

import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMatch } from '@actions/tournament';

import BracketTeam from './BracketTeam';
import { getColor } from '@utils/theme-utils';

import { isEqual } from 'lodash';

/**
 *
 * @param {Object} props
 * @param {Match} props.match
 */
const BracketMatch = ({ match, options = {}, updateMatch, ...rest }) => {
  const dispatch = useDispatch();
  let initialized = false;

  const { colorMode } = useColorMode();
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

  useEffect(() => {
    setTeam1(match.team1);
    setTeam1Points(match.team1Points);
    setTeam2(match.team2);
    setTeam2Points(match.team2Points);
  }, [match]);

  useEffect(() => {
    if (initialized) {
      const newData = { ...match, team1, team2, team1Points, team2Points };
      updateMatch(newData);
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
      {...getBracketLines(options)}
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
        />
        <Text my={2}> vs </Text>
        <BracketTeam
          team={team2}
          score={team2Points}
          scoreLimit={match?.scoreLimit || 1}
          setTeam={setTeam2}
          setScore={setTeam2Points}
        />
      </Box>
    </Flex>
  );
};

function getBracketLines({ round, matchNum, teamLimit }) {
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
