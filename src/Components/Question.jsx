import {
  Box,
  Button,
  Heading,
  VStack,
  Text,

  HStack,
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

import questions from "../Questions";
import React, { useState } from "react";
import Addmembers from "./Addmembers";
import AddQuestion from "./AddQuestion";
import Droyhetsskala from "./Droyhetsskala";
import { FiSettings } from 'react-icons/fi'
import Settings from "./Settings";




function Question() {
  const [count, setCount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure(false);
  const { isOpen: isSettingsOpen, onOpen: onSettingsOpen, onClose: onSettingsClose } = useDisclosure(false);


  const customQuestion = questions[count];
  const header = questions[count].header;
  const content = questions[count].content;
  const description = Object.keys(questions[count]).includes("description")
    ? questions[count].description
    : undefined;

  if (!(Object.keys(questions[count]).includes("header"))) {
    return (


      <Button
        bgGradient='linear(to-t, #f56038, #ffca7a)'
        _hover={{ bg: "" }}
        variant='outline'
        h="100vh"
        w="100%"
        onClick={() => setCount(count + 1)}
      >

        <Box w='0px'>
          <VStack spacing={4}>
            <Heading></Heading>

            <Text color="white" fontSize='2xl' h='30px '> {customQuestion} </Text>

            <Text h='30px' as='i'></Text>

            <AddQuestion count={count}></AddQuestion>

            <Addmembers isOpen={isOpen} onOpen={onOpen} onClose={onClose}> </Addmembers>


          </VStack>

        </Box>

      </Button >

    )

  }

  else {

    return (



      <Button
        bgGradient='linear(to-tr, #cc4e00, #ffad33)'
        _hover={{ bg: "" }}
        variant='outline'
        h="100vh"
        w="100%"
        onClick={() => setCount(count + 1)}
      >


        <Box >
          <VStack spacing={4}>

            <Heading color="white">{header}</Heading>

            <Text fontSize='xl' h='40px ' color="white">{content}</Text>

            <Text h='40px' as='i' color="white">{description}</Text>

            <AddQuestion></AddQuestion>

            <Settings></Settings>



          </VStack>

        </Box>

      </Button >
    );

  }



};


export default Question;
