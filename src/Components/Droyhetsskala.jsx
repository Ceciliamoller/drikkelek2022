import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,
    Heading,

} from '@chakra-ui/react'
import React from "react";
//import questions from '../Questions';
import { FaBeer } from 'react-icons/fa';


var difficulty = 5;

function Droyhetsskala({ myColor }) {
    //var [newDifficulty, setnewDifficulty] = useState(5);
    //var newDifficulty = 5;
    return (
        <Box >
            <Heading color={myColor} size='s' mb="15px" >   Velg drøyhetsnivå: </Heading>
            <Slider mb="40px" defaultValue={difficulty} min={1} max={10} w='250px' onChange={
                (val) => {

                    difficulty = val;
                }
            } >

                <SliderTrack bg='white'>
                    <Box position='relative' right={10}></Box>
                    <SliderFilledTrack bg='#f56038' />
                </SliderTrack>


                <SliderThumb boxSize={6}> <Box color='tomato' as={FaBeer}> </Box> </SliderThumb>
                <SliderMark value={1} mt='3' ml='-2.1' fontSize='sm' color={myColor}>
                    1
                </SliderMark>
                <SliderMark value={2} mt='3' ml='-2.1' fontSize='sm' color={myColor}>
                    2
                </SliderMark>
                <SliderMark value={3} mt='3' ml='-2.1' fontSize='sm' color={myColor}>
                    3
                </SliderMark>
                <SliderMark value={4} mt='3' ml='-2.1' fontSize='sm' color={myColor}>
                    4
                </SliderMark>
                <SliderMark value={5} mt='3' ml='-2.1' fontSize='sm' color={myColor}>
                    5
                </SliderMark>
                <SliderMark value={6} mt='3' ml='-2.1' fontSize='sm' color={myColor}>
                    6
                </SliderMark>
                <SliderMark value={7} mt='3' ml='-2.1' fontSize='sm' color={myColor}>
                    7
                </SliderMark>
                <SliderMark value={8} mt='3' ml='-2.1' fontSize='sm' color={myColor}>
                    8
                </SliderMark>
                <SliderMark value={9} mt='3' ml='-2.1' fontSize='sm' color={myColor}>
                    9
                </SliderMark>

                <SliderMark value={10} mt='3' ml='-2.1' fontSize='sm' color={myColor}>
                    10
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
                    { }

                </SliderMark>
            </Slider>

        </Box >
    )

}


export { difficulty };
export default Droyhetsskala;


