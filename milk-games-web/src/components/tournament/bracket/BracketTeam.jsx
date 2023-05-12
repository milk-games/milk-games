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
const BracketTeam = ({ team, score, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      align="center"
      maxW="100%"
      bg={getColor('bg.bg1', colorMode)}
      rounded="md"
      cursor="pointer"
      userSelect="none"
      draggable="true"
      onDragStart={e => dragStart(e, team)}
      onDragOver={dragOver}
      {...rest}
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
        bg="brown.700"
        color="bg.light"
        roundedRight="md"
        p={2}
        minW="40px"
        textAlign="center"
      >
        <Text>
          <b>{score}</b>
        </Text>
      </Box>
    </Flex>
  );
};

export default BracketTeam;
