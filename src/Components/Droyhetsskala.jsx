import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,
    Text,
    Heading,
    VStack,
    HStack,
    Modal,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    Button,
    Alert,
    AlertIcon,
    Input,


} from '@chakra-ui/react'
import React, { useState } from "react";
//import questions from '../Questions';
import { FaBeer } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5'



var difficulty = 2;

function Droyhetsskala({ myColor }) {
    //var [newDifficulty, setnewDifficulty] = useState(5);
    //var newDifficulty = 5;
    var [infoText, setInfoText] = useState("");
    const { isOpen: isSettingsOpen, onOpen: onSettingsOpen, onClose: onSettingsClose } = useDisclosure(false);
    return (
        <Box w='300px' h='150px'>

            <VStack mt='20px'>
                <Heading color={myColor} size='s' mb="15px" >   Drøyhetsnivå: </Heading>
                <Slider mb="40px" defaultValue={difficulty} min={1} max={3} w='230px' onChange={
                    (val) => {
                        difficulty = val;
                    }
                } >
                    <SliderTrack bg='white'>
                        <Box position='relative' right={10}></Box>
                        <SliderFilledTrack bg='#f56038' />
                    </SliderTrack>

                    <SliderThumb boxSize={6}> <Box color='tomato' as={FaBeer}> </Box> </SliderThumb>
                    <SliderMark value={1} mt='3' ml='-2.1' fontSize='md' color={myColor}>
                        1
                    </SliderMark>
                    <SliderMark value={2} mt='3' ml='-2.1' fontSize='md' color={myColor}>
                        2
                    </SliderMark>
                    <SliderMark value={3} mt='3' ml='-2.1' fontSize='md' color={myColor}>
                        3
                    </SliderMark>

                    <SliderMark
                        value={difficulty}
                        textAlign='center'
                        bg='blue.500'
                        color='white'
                        mt='5'
                        ml='-6'
                        w='100'
                    >

                    </SliderMark>
                </Slider>
            </VStack>
            <HStack mt='40px'>

                <Button
                    aria-label='Settings'
                    leftIcon={< IoInformationCircleOutline />}
                    fontSize='30px'
                    color={myColor}
                    variant='ghost'
                    ml="30px"

                    size='s'
                    _hover={{ bg: '' }}
                    _active={{
                        bg: '',
                    }}
                    onClick={() => {
                        if (infoText === "") {
                            setInfoText("Velg hvor drøyt spillet skal være");
                        }
                        else { setInfoText(""); }
                    }} >
                </Button>
                <Text color={myColor} > {infoText} </Text>
            </HStack>
        </Box >
    )

}


export { difficulty };
export default Droyhetsskala;


