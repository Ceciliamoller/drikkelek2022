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
import Drøyhetsskala from "./Droyhetsskala";
import { FiSettings } from 'react-icons/fi'


function Settings() {
    const { isOpen: isSettingsOpen, onOpen: onSettingsOpen, onClose: onSettingsClose } = useDisclosure(false);
    return (

        <Button aria-label='Settings' leftIcon={< FiSettings />}

            fontSize='40px'
            color='white'
            variant='ghost'
            onClick={onSettingsOpen} >

            <Modal isOpen={isSettingsOpen} onClose={onSettingsClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> Innstillinger </ModalHeader>
                    <ModalCloseButton />
                    <VStack spacing='45px'>

                        <Text>    </Text>
                        <Addmembers> </Addmembers>
                        <Drøyhetsskala> </Drøyhetsskala>
                    </VStack>

                    <ModalFooter>

                        <HStack parcing='10px'>
                            <Box w='200px'>

                            </Box>

                            <Button colorScheme='blue' mr={3} onClick={onSettingsClose}>
                                Lukk
                            </Button>
                        </HStack>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Button>



    )
};

export default Settings;

