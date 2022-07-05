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

function Droyhetsskala() {
    //const [latestMember, setLatestMember] = useState("");
    return (
        <Box>
            <Heading color='black' size='s' > Velg drøyhetsnivå: </Heading>
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

export default Droyhetsskala;


