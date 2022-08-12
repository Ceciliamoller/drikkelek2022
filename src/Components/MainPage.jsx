//import logo from './logo.svg';
import "../App.css";
import React, { useState } from "react";
import {
    Center, Button, useDisclosure, VStack, Box, Switch, Text, FormLabel, HStack, Image, extendTheme,
} from "@chakra-ui/react";

import Question from "../Components/Question";
import Addmembers from "../Components/Addmembers";
import Droyhetsskala from "./Droyhetsskala";

<<<<<<< HEAD
import StartsideNidarus from '../Assets/NidarusStart.gif';
=======
import StartsideNidarus from '../Assets/NidarusStart2.gif';
>>>>>>> d9e98d13a94f287b2bcc90ae01b1154940a30fbf
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
<<<<<<< HEAD
                            <Box mt="150px"  >
                                <Droyhetsskala myColor='white' > </Droyhetsskala>
                            </Box>
                            <Button as='kbd' color="#004e00" onClick={() => setFinalStarted(true)}> Lagre</Button>
                            <HStack position="absolute" right="75px" spacing="10px">

                                <Text as='kbd' ml='90px' fontSize="xl" color="white"> Gløs-tema: </Text>
                                <Switch colorScheme="red" id='glostema' defaultChecked="on" onChange={() => glostema = !glostema}> </Switch>
                            </HStack>
=======
                            <Box mt="240px" bg="#f3a040" >
                                <Droyhetsskala myColor='white' > </Droyhetsskala>
                            </Box>
                            <Button onClick={() => setFinalStarted(true)}> Lagre</Button>
>>>>>>> d9e98d13a94f287b2bcc90ae01b1154940a30fbf
                        </VStack > :
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
<<<<<<< HEAD
    <Button as="kbd" color="#004e00" onClick={() => setStarted(true)}>
=======
                                <Button onClick={() => setStarted(true)}>
>>>>>>> d9e98d13a94f287b2bcc90ae01b1154940a30fbf
            Start
        </Button>
        <Addmembers></Addmembers>
        <Box position="absolute" left="60" bottom="8">
            <EmailButton > </EmailButton>
        </Box>

    </VStack>
                        </Box >
                }
            </Center >
        </Box >
    );
}
export { glostema };
export default MainPage;
