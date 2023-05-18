/**
 * @typedef {import("../../types/index.d").Team} Team
 */

import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { getColor } from '@utils/theme-utils';
import { dragStart } from './drag-events';

/**
 *
 * @param {Object} props
 * @param {Team} props.team
 * @param {number} score
 */
const BracketTeam = ({
  team,
  score,
  scoreLimit = 1,
  setTeam,
  setScore,
  updateState,
  ...rest
}) => {
  const { colorMode } = useColorMode();

  /**
   * @param {MouseEvent} e
   */
  const handlePointsOnClick = e => {
    if (team != null) {
      if (score > 0 && e.ctrlKey) {
        updateState(setScore, score - 1);
      } else if (score < scoreLimit && !e.ctrlKey) {
        updateState(setScore, score + 1);
      }
    }
  };

  /**
   * @param {MouseEvent} e
   */
  const handleTeamOnClick = e => {
    if (e.ctrlKey) {
      updateState(setTeam, null);
    }
  };

  /**
   * @param {DragEvent} e
   */
  const handleDragOver = e => {
    e.preventDefault();
  };

  /**
   * @param {DragEvent} e
   */
  const handleDrop = e => {
    const data = e.dataTransfer.getData('text');
    updateState(setTeam, JSON.parse(data));
  };

  return (
    <Flex
      {...rest}
      align="center"
      maxW="100%"
      bg={getColor('bg.bg1', colorMode)}
      rounded="md"
      cursor="pointer"
      userSelect="none"
      draggable="true"
      onDragStart={e => dragStart(e, team)}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="bracket-team"
    >
      <Box
        p={2}
        borderRadius="md"
        textOverflow="ellipsis"
        overflow="hidden"
        flexGrow={1}
        onClick={handleTeamOnClick}
      >
        <Text isTruncated w="100%" textOverflow="ellipsis">
          {team?.name ? team.name : ''}
        </Text>
      </Box>
      <Box
        bg={score == scoreLimit ? 'green.500' : 'brown.700'}
        color="bg.light"
        roundedRight="md"
        p={2}
        minW="40px"
        textAlign="center"
        onClick={handlePointsOnClick}
      >
        <Text>
          <b>{score}</b>
        </Text>
      </Box>
    </Flex>
  );
};

export default BracketTeam;
