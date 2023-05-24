/**
 * @typedef {import("../../types/index.d").Season} Season
 */

import {
  Box,
  Button,
  Flex,
  useColorMode,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import Header from '@components/common/header/Header';
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import bg from '@assets/bg1-small.png';
import { getColor } from '@utils/theme-utils';
import { TimeFormatter } from '@utils';
import SectionHeading from '@components/common/section/SectionHeading';
import Section from '@components/common/section/Section';
import { SeasonService } from '@utils/api-service';
import Season from './Season';

const Seasons = () => {
  const { colorMode } = useColorMode();
  /**
   * @type {Season}
   */
  const seasons = useLoaderData();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  // const finalRef = React.useRef(null);
  const [newSeasonName, setNewSeasonName] = useState('');
  const [newSeasonStart, setNewSeasonStart] = useState('');
  const [newSeasonEnd, setNewSeasonEnd] = useState('');

  return (
    <Box w="100%">
      <Box h="80vh" maxH={{ base: '800px', md: '950px' }} position="relative">
        <Box
          bgImage={bg}
          bgRepeat="repeat"
          bgPosition="center"
          boxSize="100%"
          filter="grayscale(100%) opacity(40%)"
          position="absolute"
        />
        <Box
          bgGradient={`linear(to-b, rgba(0,0,0,0), ${getColor(
            'bg',
            colorMode
          )})`}
          boxSize="100%"
          position="absolute"
        />

        <Flex
          position="relative"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          h="100%"
        >
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Past Milk Games Seasons</TableCaption>
              <Thead>
                <Tr>
                  <Th>Season Name</Th>
                  <Th>Start Date</Th>
                  <Th>End Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {seasons.map((item, i) => (
                  <Tr
                    onClick={() => navigate(`/seasons/${item.id}`)}
                    cursor="pointer"
                  >
                    <Td>{item.name}</Td>
                    <Td>{TimeFormatter.toMonthString(item.startDate)}</Td>
                    <Td>{TimeFormatter.toMonthString(item.endDate)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          <Button colorScheme="green" mt={4} onClick={onOpen}>
            Create new season
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>New Season</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <form
                  onSubmit={async () => {
                    onClose();
                    console.log('fds');
                    await SeasonService.postSeason({
                      name: newSeasonName,
                      start: newSeasonStart,
                      end: newSeasonEnd,
                    });
                  }}
                >
                  <FormControl isRequired>
                    <FormLabel>Season Name</FormLabel>
                    <Input
                      placeholder=""
                      onChange={event =>
                        setNewSeasonName(event.currentTarget.value)
                      }
                    />
                  </FormControl>
                  <FormControl isRequired mt={6}>
                    <FormLabel>Start Date</FormLabel>
                    <Input
                      type="date"
                      onChange={event =>
                        setNewSeasonStart(event.currentTarget.value)
                      }
                    />
                  </FormControl>
                  <FormControl isRequired mt={6}>
                    <FormLabel>End Date</FormLabel>
                    <Input
                      type="date"
                      onChange={event =>
                        setNewSeasonEnd(event.currentTarget.value)
                      }
                    />
                  </FormControl>
                  <Button
                    variantColor="teal"
                    colorScheme="blue"
                    variant="outline"
                    type="submit"
                    width="full"
                    mt={4}
                  >
                    Submit
                  </Button>
                </form>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
    </Box>
  );
};

export default Seasons;
