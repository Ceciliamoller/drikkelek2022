//import logo from './logo.svg';
import "../App.css";
import React, { useState } from "react";
import {
    Center, Button, useDisclosure, VStack, Box,
    Heading,
    Text,
} from "@chakra-ui/react";
import Question from "../Components/Question";
import Addmembers from "../Components/Addmembers";
import Droyhetsskala from "./Droyhetsskala";






function MainPage() {

    const { isOpen, onOpen, onClose } = useDisclosure(false);


    const [started, setStarted] = useState(false);
    const [finalStarted, setFinalStarted] = useState(false);


    return (
        <Box bg="#f7a325" h='100vh' spacing='20px' w="100vw">




            <Center h="100%" w="100%">
                {finalStarted ?
                    <>  <Question /> </> :

                    started ?
                        <VStack mt="500px" h='100%' spacing="50px" w="100%">
                            <Droyhetsskala > </Droyhetsskala>
                            <Button onClick={() => setFinalStarted(true)}> Lagre</Button>
                        </VStack> :

                        <VStack
                            spacing={4}
                            align='stretch'
                        >
                            <Heading color="white" size="3xl" >
                                Lambo
                            </Heading>
                            <Addmembers></Addmembers>
                            <Button onClick={() => setStarted(true)}>
                                Start
                            </Button>
                        </VStack>
                }
            </Center>

        </Box >
    );
}

export default MainPage;
