import {
  Box,
  Button,
  Heading,
  TextStack,
  HStack,
  VStack,
  Text,
  StackDivider,
  Center,

} from "@chakra-ui/react";

import questions from "../Questions";
import React, { useState } from "react";
import { extendTheme } from "@chakra-ui/react";
import Addmembers from "./Addmembers";
import { HiPlusSm } from 'react-icons/hi';
import AddQuestion from "./AddQuestion";

import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import Questions from "../Questions";
import Drøyhetsskala from "./Drøyhetsskala";


function Question() {
  const [count, setCount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure(false);

  const customQuestion = questions[count];
  const header = questions[count].header;
  const content = questions[count].content;
  const description = Object.keys(questions[count]).includes("description")
    ? questions[count].description
    : undefined;

  if (!(Object.keys(questions[count]).includes("header"))) {
    return (

      <Button
        bg="red.500"
        _hover={{ bg: "" }}
        variant='outline'
        h="100vh"
        w="100%"
        onClick={() => setCount(count + 1)}
      >

        <Box w='0px'>
          <VStack spacing={4}>
            <Heading></Heading>

            <Text h='30px '> {customQuestion} </Text>

            <Text h='30px' as='i'></Text>

            <AddQuestion count={count}></AddQuestion>
            <Button w='200px' rightIcon={<HiPlusSm />} onClick={onOpen} variant='outline' _hover='ghost' aria-label='Search database' fontSize='18px'> Legg til spillere </Button>
            <Addmembers isOpen={isOpen} onOpen={onOpen} onClose={onClose}> </Addmembers>

          </VStack>

        </Box>

      </Button >

    )

  }

  else {

    return (

      <Button
        bg='red'
        _hover={{ bg: "" }}
        variant='outline'
        h="100vh"
        w="100%"
        onClick={() => setCount(count + 1)}
      >

        <Box w='0px'>
          <VStack spacing={4}>

            <Heading color="white">{header}</Heading>

            <Text h='30px ' color="white">{content}</Text>

            <Text h='30px' as='i' color="white">{description}</Text>

            <AddQuestion count={count}></AddQuestion>
            <Button w='200px' rightIcon={<HiPlusSm />} onClick={onOpen} variant='solid' _hover='ghost' aria-label='Search database' fontSize='18px'> Legg til spillere </Button>
            <Addmembers isOpen={isOpen} onOpen={onOpen} onClose={onClose}> </Addmembers>



          </VStack>

        </Box>

      </Button >
    );

  }



};


export default Question;
