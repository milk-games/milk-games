/**
 * @typedef {import("../../types/index.d").Match} Match
 */

/**
 * @typedef {import("../../types/index.d").Team} Team
 */

import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BracketTeam from './BracketTeam';
import { getColor } from '@utils/theme-utils';
import { dragEnd } from './drag-events';

/**
 *
 * @param {Object} props
 * @param {Match} props.match
 */
const BracketMatch = ({ match = {}, options = {}, ...rest }) => {
  const { colorMode } = useColorMode();

  const [team1, setTeam1] = useState({
    team: match.team1,
    points: match.team1Points,
  });

  const [team2, setTeam2] = useState({
    team: match.team2,
    points: match.team2Points,
  });

  useEffect(() => {
    setTeam1({ ...match.team1, points: match.team1Points });
    setTeam2({ ...match.team2, points: match.team2Points });
  }, [match]);

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
          score={team1.points}
          onDrop={e => dragEnd(e, setTeam1)}
        />
        <Text my={2}> vs </Text>
        <BracketTeam
          team={team2}
          score={team2.points}
          onDrop={e => dragEnd(e, setTeam2)}
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
