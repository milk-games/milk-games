/**
 * @typedef {import("@types/index.d").Tournament} Tournament
 */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '@actions/tournament';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spinner,
  Text,
  useColorMode,
} from '@chakra-ui/react';

import Header from '@components/common/header/Header';
import SectionHeading from '@components/common/section/SectionHeading';

import { TournamentService } from '@utils/api-service';
import Bracket from './bracket/Bracket';
import { useLoaderData } from 'react-router-dom';
import TournamentCard from './TournamentCard';
import Section from '@components/common/section/Section';
import AuthContext from '@components/auth/AuthContext';
import { roles } from '@utils/auth-utils';
import { BiPlus } from 'react-icons/bi';

/**
 *
 * Teams
 * Bracket + matches
 *
 */

const Tournaments = () => {
  const { hasRole } = useContext(AuthContext);

  /**
   * @type {Tournament}
   */
  const tournaments = useLoaderData();
  const { colorMode } = useColorMode();

  return (
    <Box w="100%" pb={24}>
      <Section>
        <SectionHeading title="TOURNAMENTS">
          <IconButton colorScheme="green" icon={<BiPlus />} />
        </SectionHeading>
        <Flex justifyContent="center" flexWrap="wrap">
          {tournaments.map(tournament => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </Flex>
      </Section>
      {hasRole(roles.ADMIN) && (
        <Section>
          <SectionHeading title="CREATE" />
        </Section>
      )}
    </Box>
  );
};

export default Tournaments;
