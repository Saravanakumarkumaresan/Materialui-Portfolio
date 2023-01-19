import { Box, Stack, styled, Typography } from "@mui/material"
import Kidsimg from '../../Static/Kidsimg.jpg'
import Menimg from '../../Static/Menimg.jpg'
import Womenimg from '../../Static/Womenimg.jpg'

export const Categories=()=>{
    const Styledbox=styled(Box)({
        height:200,
        width:'100%',
        cursor:'pointer',
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:'cover',

    })
    
    const Styledtypograhy=styled(Typography)({
        margin:'25% 50px 25% 50px',
        background:'white',
        opacity:'0.8'
    })
    
    return(
     <Box>
        <Stack spacing={{xs:1,sm:2,md:4}} direction={{xs:'column',sm:'row'}} mt={5}>
            <Styledbox sx={{backgroundImage:`url(${Kidsimg})`}}><Styledtypograhy variant="h3" align="center">Kids</Styledtypograhy></Styledbox>
            <Styledbox sx={{backgroundImage:`url(${Menimg})`}}><Styledtypograhy variant="h3" align="center">Men</Styledtypograhy></Styledbox>
            <Styledbox sx={{backgroundImage:`url(${Womenimg})`}}><Styledtypograhy variant="h3" align="center">Women</Styledtypograhy></Styledbox>
        </Stack>
     </Box>
    )
}