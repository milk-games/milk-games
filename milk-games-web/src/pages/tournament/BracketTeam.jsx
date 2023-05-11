import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { getColor } from '../../utils/theme-utils';

const BracketTeam = ({ team, score }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      align="center"
      maxW="100%"
      bg={getColor('bg.bg1', colorMode)}
      rounded="md"
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
