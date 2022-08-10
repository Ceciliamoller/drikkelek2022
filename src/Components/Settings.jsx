import {
    Button,
    VStack,
    Text,
    Modal,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import Addmembers from "./Addmembers";
import Drøyhetsskala from "./Droyhetsskala";
import { FiSettings } from 'react-icons/fi'


function Settings() {
    const { isOpen: isSettingsOpen, onOpen: onSettingsOpen, onClose: onSettingsClose } = useDisclosure(false);
    return (

        <Button aria-label='Settings' leftIcon={< FiSettings />}
            fontSize='40px'
            color='white'
            variant='ghost'
            onClick={(e) => {
                e.stopPropagation();
                onSettingsOpen();
            }} >

            <lord-icon
                src="https://cdn.lordicon.com/ryyjawhw.json"
                trigger="hover"
            >
            </lord-icon>
            <Modal isOpen={isSettingsOpen} onClose={onSettingsClose} size="sm" >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> Innstillinger </ModalHeader>
                    <ModalCloseButton />
                    <VStack spacing='45px'>
                        <Text>    </Text>
                        <Addmembers newColorSceme='red'> </Addmembers>
                        <Drøyhetsskala color="black"> </Drøyhetsskala>
                    </VStack>
                    <ModalFooter>


                        <Button mt='20px' mr={3} onClick={onSettingsClose}>
                            Lukk
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Button>



    )
};

export default Settings;

