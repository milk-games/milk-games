import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import PlayerAdmin from './PlayerAdmin';
import GameAdmin from './GameAdmin';
import Section from '@components/common/section/Section';
import { useLoaderData } from 'react-router-dom';

const Admin = () => {
  const { games, players } = useLoaderData();

  console.log({ games, players });

  return (
    <Section>
      <Tabs>
        <TabList>
          <Tab>Players</Tab>
          <Tab>Games</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <PlayerAdmin />
          </TabPanel>
          <TabPanel>
            <GameAdmin games={games} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  );
};

export default Admin;
