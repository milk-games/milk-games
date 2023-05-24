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
import React from 'react';

const TournamentForm = ({ isOpen, onOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Tournament</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={e => {
              e.preventDefault();

              console.log(e.target);
            }}
          >
            <FormControl isRequired mb={4}>
              <FormLabel>Tournament Name</FormLabel>
              <Input placeholder="2v2 Aram Tournament" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Game</FormLabel>
              <Select>
                <option>League of Legends</option>
                <option disabled>Valorant</option>
                <option disabled>Rocket League</option>
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
                <Select>
                  <option>2</option>
                  <option>4</option>
                  <option>8</option>
                  <option>16</option>
                  <option>32</option>
                </Select>
              </FormControl>{' '}
              <FormControl ml={2}>
                <FormLabel>Team Size</FormLabel>
                <Select>
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
              <NumberInput step={5} defaultValue={0} min={0}>
                <NumberInputField />
              </NumberInput>
            </FormControl>
            <Flex mb={2}>
              <FormControl mr={2}>
                <FormLabel>Date</FormLabel>
                <Input type="date" />
              </FormControl>{' '}
              <FormControl ml={2}>
                <FormLabel>Time</FormLabel>
                <Input type="time" />
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
