import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,
    Heading,
    Button,
    Text,

} from '@chakra-ui/react'
import React, { useState } from "react";
import questions from '../Questions';


var newDifficulty = 1;

function Droyhetsskala() {
    var [newDifficulty, setnewDifficulty] = useState(5);
    //var newDifficulty = 5;
    return (
        <Box>
            <Heading color='white' size='s' >   Velg drøyhetsnivå: </Heading>
            <Slider defaultValue={5} min={1} max={10} w='250px' onChange={
                (val) => setnewDifficulty(val)
            } >

                <SliderTrack bg='white'>
                    <Box position='relative' right={10}></Box>
                    <SliderFilledTrack bg='#f56038' />
                </SliderTrack>
                <Text> { } </Text>

                <SliderThumb boxSize={3} />
                <SliderMark
                    value={newDifficulty}
                    textAlign='center'
                    bg='blue.500'
                    color='white'
                    mt='5'
                    ml='-6'
                    w='10'
                >
                    {newDifficulty}
                </SliderMark>
            </Slider>

        </Box>
    )

}


export { newDifficulty };
export default Droyhetsskala;


