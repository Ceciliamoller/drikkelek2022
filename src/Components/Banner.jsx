
import { Box, Image } from '@chakra-ui/react'
import circleLogo from '../Assets/circleLogo.jpg';


function Banner(){
return<> 
<header>
    <Box 
        d= "flex" 
        alignItems= "center" 
        justifyContent= "space-between" 
        ml= {6} 
        mr = {6}>
        <Box> 
            <Image boxSize="150px" src= {circleLogo} alt = "circle" />
        </Box>
    </Box>
</header>
</>
}

export default Banner; 