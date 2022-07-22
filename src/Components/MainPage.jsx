//import logo from './logo.svg';
import "../App.css";
import React, { useState } from "react";
import {
    Center, Button, useDisclosure, VStack, Box,
    Heading,
    Text,
    Image,
} from "@chakra-ui/react";
import Question from "../Components/Question";
import Addmembers from "../Components/Addmembers";
import Droyhetsskala from "./Droyhetsskala";

import circleLogo from '../Assets/circleLogo.jpg';
import StartsideNidarus from '../Assets/StartsideNidarus.PNG';
import TittelNidarus from '../Assets/StartsideNidarus.PNG';







function MainPage() {


    const { isOpen, onOpen, onClose } = useDisclosure(false);


    const [started, setStarted] = useState(false);
    const [finalStarted, setFinalStarted] = useState(false);




    return (
        <Box backgroundImage={StartsideNidarus} id="x" h='100vh' backgroundPosition="center"
            spacing='20px' w="100vw" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundAttachment="fixed" >





            <Center h="100%" w="100%">
                {finalStarted ?
                    <>  <Question /> </> :

                    started ?
                        <VStack mt="500px" h='100%' w="100%">
                            <Box bg="#f3a040" p='6'>
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
