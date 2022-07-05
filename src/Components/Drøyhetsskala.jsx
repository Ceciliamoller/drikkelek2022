import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,
    Heading,
    Button,
} from '@chakra-ui/react'

function Drøyhetsskala() {
    return (
        <Box>
            <Heading color='white' size='s' > Drøyhetsskala </Heading>
            <Slider defaultValue={5} min={1} max={10} w='300px' >
                <SliderTrack bg='red.100'>
                    <Box position='relative' right={10} />
                    <SliderFilledTrack bg='tomato' />
                </SliderTrack>
                <SliderThumb boxSize={3} />
            </Slider>

        </Box>
    )

}

export default Drøyhetsskala;


