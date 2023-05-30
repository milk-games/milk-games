import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Select,
} from '@chakra-ui/react';
import { TournamentService } from '@utils/api-service';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const TournamentForm = ({ isOpen, onOpen, onClose }) => {
  const { id } = useParams();

  /**
   *
   * @param {MouseEvent} e
   */
  const handleSubmit = e => {
    e.preventDefault();

    console.log(id);

    const {
      name,
      game,
      prize,
      elimination,
      teamSize,
      teamLimit,
      date,
      time,
    } = e.target;

    const tournament = {
      name: name.value,
      season: { id },
      game: { id: game.value },
      eliminationType: elimination.value,
      teamSize: teamSize.value,
      teamLimit: teamLimit.value,
      prize: prize.value,
      startDate: new Date(date.value + ' ' + time.value),
    };

    TournamentService.create(tournament);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Tournament</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired mb={4}>
              <FormLabel>Tournament Name</FormLabel>
              <Input placeholder="2v2 Aram Tournament" name="name" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Game</FormLabel>
              <Select name="game">
                <option value={1}>League of Legends</option>
                <option disabled>Valorant</option>
                <option disabled>Rocket League</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Elimination Type</FormLabel>
              <Select name="elimination">
                <option>Single</option>
                <option disabled>Double</option>
                <option disabled>Round Robin</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Elimination Type</FormLabel>
              <Select>
                <option>Single</option>
                <option disabled>Double</option>
                <option disabled>Round Robin</option>
              </Select>
            </FormControl>
            <Flex mb={4}>
              <FormControl mr={2}>
                <FormLabel>Team Limit</FormLabel>
                <Select name="teamLimit">
                  <option>2</option>
                  <option>4</option>
                  <option>8</option>
                  <option>16</option>
                  <option>32</option>
                </Select>
              </FormControl>{' '}
              <FormControl ml={2}>
                <FormLabel>Team Size</FormLabel>
                <Select name="teamSize">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Select>
              </FormControl>
            </Flex>
            <FormControl mb={4}>
              <FormLabel>Prize</FormLabel>
              <NumberInput step={5} defaultValue={0} min={0} name="prize">
                <NumberInputField />
              </NumberInput>
            </FormControl>
            <Flex mb={2}>
              <FormControl mr={2} isRequired>
                <FormLabel>Date</FormLabel>
                <Input type="date" name="date" />
              </FormControl>
              <FormControl ml={2} isRequired>
                <FormLabel>Time</FormLabel>
                <Input type="time" name="time" />
              </FormControl>
            </Flex>
            <Button
              colorScheme="green"
              variant="outline"
              type="submit"
              width="full"
              my={4}
            >
              Submit
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TournamentForm;
