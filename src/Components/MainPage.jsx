//import logo from './logo.svg';
import "../App.css";
import React, { useState } from "react";
import {
    Center, Button, useDisclosure, VStack, Box,
} from "@chakra-ui/react";
import Question from "../Components/Question";
import Addmembers from "../Components/Addmembers";
import Droyhetsskala from "./Droyhetsskala";

import StartsideNidarus from '../Assets/StartsideNidarus.PNG';







function MainPage() {


    const { isOpen, onOpen, onClose } = useDisclosure(false);


    const [started, setStarted] = useState(false);
    const [finalStarted, setFinalStarted] = useState(false);




    return (
        <Box backgroundImage={StartsideNidarus} id="x" h='100vh' backgroundPosition="center"
            spacing='20px' w="100vw" backgroundRepeat="no-repeat" backgroundSize="cover"  >





            <Center h="100%" w="100%">
                {finalStarted ?
                    <>  <Question /> </> :

                    started ?
                        <VStack h='100%' w="100%">
                            <Box mt="250px" bg="#f3a040" p='6'>
                                <Droyhetsskala myColor='white' > </Droyhetsskala>
                            </Box>
                            <Button onClick={() => setFinalStarted(true)}> Lagre</Button>
                        </VStack> :

                        <VStack
                            spacing={4}
                            align='stretch'
                        >

                            <Button onClick={() => setStarted(true)}>
                                Start
                            </Button>
                            <Addmembers></Addmembers>
                        </VStack>
                }
            </Center>

        </Box >
    );
}

export default MainPage;
