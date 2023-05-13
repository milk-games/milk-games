/**
 * @typedef {import("../../types/index.d").Team} Team
 */

import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { getColor } from '@utils/theme-utils';
import { dragEnd, dragOver, dragStart } from './drag-events';

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
  updateMatch,
  ...rest
}) => {
  const { colorMode } = useColorMode();

  /**
   * @param {MouseEvent} e
   */
  const handlePointsOnClick = e => {
    if (score > 0 && e.ctrlKey) {
      updateMatch(score - 1, setScore);
    } else if (score < scoreLimit && !e.ctrlKey) {
      updateMatch(score + 1, setScore);
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
    updateMatch(JSON.parse(data), setTeam);
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
    >
      <Box
        p={2}
        borderRadius="md"
        textOverflow="ellipsis"
        overflow="hidden"
        flexGrow={1}
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
