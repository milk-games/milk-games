import {
  Box,
  Center,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Section from '@components/common/section/Section';
import React from 'react';

const GameAdmin = ({ games }) => {
  return (
    <Box>
      <Section>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Tournament Game Options</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th textAlign="center" w="50%">
                  Image
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {games.map((game, i) => (
                <Tr key={i} cursor="pointer">
                  <Td>{game.name}</Td>
                  <Td textAlign="center">
                    <Box overflow="hidden" objectFit="cover" w="100%" h="120px">
                      <Image src={game.imgUrl} />
                    </Box>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Section>
    </Box>
  );
};

export default GameAdmin;
