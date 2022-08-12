//import logo from './logo.svg';
import "../App.css";
import React, { useState } from "react";
import {
    Center, Button, useDisclosure, VStack, Box, Switch, Text, FormLabel, HStack, Image, extendTheme,
} from "@chakra-ui/react";

import Question from "../Components/Question";
import Addmembers from "../Components/Addmembers";
import Droyhetsskala from "./Droyhetsskala";

import StartsideNidarus from '../Assets/NidarusStart.gif';
import TittelNidarus from '../Assets/TittelNidarus.PNG';
import EmailButton from "./Emailbutton";


var glostema = true;

function MainPage() {

    const { isOpen, onOpen, onClose } = useDisclosure(false);

    //const [newGlostema, setNewGlostema] = useState(true);
    const [started, setStarted] = useState(false);
    const [finalStarted, setFinalStarted] = useState(false);


    return (
        <Box backgroundImage={StartsideNidarus}
            id="x"
            h='100vh'
            backgroundPosition="center"
            spacing='20px'
            w="100vw"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >

            <Center h="100%" w="100%">
                {finalStarted ?
                    <>  <Question /> </> :
                    started ?
                        <VStack h='100%' w="100%" spacing='20px' >
                            <Box mt="150px"  >
                                <Droyhetsskala myColor='white' > </Droyhetsskala>
                            </Box>
                            <Button as='kbd' color="#004e00" onClick={() => setFinalStarted(true)}> Lagre</Button>
                            <HStack position="absolute" right="75px" spacing="10px">

                                <Text as='kbd' ml='90px' fontSize="xl" color="white"> Gløs-tema: </Text>
                                <Switch colorScheme="red" id='glostema' defaultChecked="on" onChange={() => glostema = !glostema}> </Switch>
                            </HStack>
                        </VStack> :
                        <Box>
                            <VStack
                                spacing={4}
                                align='stretch'
                            >
                                <Box backgroundImage={TittelNidarus}
                                    id="y"
                                    h='30vh'
                                    w="90vw"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="cover"

                                    position="absolute"
                                    left="5"
                                    right="0"
                                    bottom="400"
                                />
                                <Button as="kbd" color="#004e00" onClick={() => setStarted(true)}>
                                    Start
                                </Button>
                                <Addmembers></Addmembers>
                                <Box position="absolute" left="60" bottom="8">
                                    <EmailButton > </EmailButton>
                                </Box>

                            </VStack>
                        </Box>
                }
            </Center>
        </Box >
    );
}
export { glostema };
export default MainPage;