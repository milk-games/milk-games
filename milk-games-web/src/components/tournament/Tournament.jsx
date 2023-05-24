/**
 * @typedef {import("@types/index.d").Tournament} Tournament
 */
import React, { useEffect, useRef, useState } from 'react';
import { Box, useColorMode } from '@chakra-ui/react';

import SectionHeading from '@components/common/section/SectionHeading';

import Bracket from './bracket/Bracket';
import { useLoaderData } from 'react-router-dom';
import Section from '@components/common/section/Section';

/**
 *
 * Teams
 * Bracket + matches
 *
 */

const Tournament = () => {
  const tournament = useLoaderData();

  console.log({ tournament });

  /**
   * @type {[Tournament, Function]}
   */

  const { colorMode } = useColorMode();

  return (
    <Box w="100%">
      <Section>
        <SectionHeading title="RULES"></SectionHeading>
        {/* Table of the teams? */}
        {/* List of all team cards */}
      </Section>

      <Section>
        <SectionHeading title="TEAMS"></SectionHeading>
        {/* Table of the teams? */}
        {/* List of all team cards */}
      </Section>

      <Section>
        <SectionHeading title="BRACKET"></SectionHeading>

        <Bracket
          matches={tournament.matches}
          teamLimit={tournament.teamLimit}
        />

        {/* Table of the teams? */}
        {/* List of all team cards */}
      </Section>
    </Box>
  );
};

export default Tournament;
