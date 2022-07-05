//import logo from './logo.svg';
import "../App.css";
import React, { useState } from "react";
import {
    Center, Button, Modal,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure, VStack, StackDivider,
    Box,
    Heading,
    Text,
} from "@chakra-ui/react";
import Question from "../Components/Question";
import Addmembers from "../Components/Addmembers";
import Drøyhetsskala from "./Drøyhetsskala";






function MainPage() {

    const { isOpen, onOpen, onClose } = useDisclosure(false);


    const [started, setStarted] = useState(false);
    const [finalStarted, setFinalStarted] = useState(false);


    return (
        <Box bg="#f7a325" h='100vh' spacing='20px'>


            <VStack h='100%' spacing="140px">
                <Text spacing="1000px">         </Text>
                <Heading color="white" size="3xl" fontStyle={`'Open Sans', sans-serif`}>
                    Lambo-leken
                </Heading>

                <Center h="10%" w="100%">
                    {finalStarted ?
                        <Question></Question> :

                        started ?

                            <VStack spacing='60px'>
                                <Drøyhetsskala > </Drøyhetsskala>
                                <Button onClick={() => setFinalStarted(true)}> Lagre</Button>
                            </VStack> :

                            <VStack
                                spacing={4}
                                align='stretch'
                            >

                                <Button onClick={() => setStarted(true)}>
                                    Start
                                </Button>
                            </VStack>

                    }
                </Center>

            </VStack>
        </Box>
    );
}

export default MainPage;
