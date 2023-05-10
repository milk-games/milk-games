import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import HeaderV3 from '../common/HeaderV3'
import { TournamentService } from '../utils/api-service';
import { getColor } from '../utils/theme-utils';
import SectionHeading from '../common/components/SectionHeading';


/**
 * 
 * Teams
 * Bracket + matches
 * 
 */


const Tournament = () => {
    const { colorMode } = useColorMode();

    const [tournament, setTournament] = useState({});

    useEffect(() => {
        TournamentService.get(1).then(tournament => {
            console.log({tournament})
            setTournament(tournament)
        });
    }, []);

  return (
    <Box w="100%">
      <Box>
        {/* Cow background here */}
        <HeaderV3 />
      </Box>

      <Box
        mt={24}
        mx="auto"
        w={{ base: '100%', md: '3xl', lg: '4xl' }}
        p={{ base: 4, md: 4 }}
      >
        <SectionHeading title="TEAMS"></SectionHeading>
        {/* Table of the teams? */}
        {/* List of all team cards */}
      </Box>

      <Box
        mt={24}
        mx="auto"
        w={{ base: '100%', md: '3xl', lg: '4xl' }}
        p={{ base: 4, md: 4 }}
      >
        <SectionHeading title="BRACKET"></SectionHeading>
        {/* Table of the teams? */}
        {/* List of all team cards */}
      </Box>
    </Box>
  )
}

export default Tournament