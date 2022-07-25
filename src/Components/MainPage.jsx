//import logo from './logo.svg';
import "../App.css";
import React, { useState } from "react";
import {
    Center, Button, useDisclosure, VStack, Box, Switch, Text,
} from "@chakra-ui/react";
import Question from "../Components/Question";
import Addmembers from "../Components/Addmembers";
import Droyhetsskala from "./Droyhetsskala";

import StartsideNidarus from '../Assets/StartsideNidarus.PNG';


var glostema = true;




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

                            <Box mt="280px" bg="#f3a040" >
                                <Droyhetsskala myColor='white' > </Droyhetsskala>
                            </Box>
                            <Button onClick={() => setFinalStarted(true)}> Lagre</Button>
                        </VStack> :
                        <VStack mt="80px"
                            spacing={4}
                            align='stretch'
                        >
                            <Button onClick={() => setStarted(true)}>
                                Start
                            </Button>
                            <Addmembers></Addmembers>
                            <Box ml="100px">
                                <Text color="white"> Gløs-tema: </Text>
                                <Switch defaultChecked="on" onChange={() => glostema = false}> </Switch>
                            </Box>

                        </VStack>
                }
            </Center>

        </Box >
    );
}
export { glostema };
export default MainPage;
