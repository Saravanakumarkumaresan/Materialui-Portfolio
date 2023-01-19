import { Box, Stack, Typography,styled } from "@mui/material"
import {Facebook,Instagram,Twitter} from '@mui/icons-material/';

export const Footer=()=>{
    const Socialbox=styled(Box)({
        display:'flex',
        gap:10,
        color:'white'
    })
    return(
        <Box sx={{background:'black', height:'300px'}}>
            <Stack direction={{xs:'row',md:'row'}} p={7}>
                <Box flex={1}>
                    <Typography color={'white'} align={'center'}>
                        Contact us 
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        +91 9123578909 <br />
                        5, MG Road,North Palani,<br />
                        Coimbatore 624601.
                    </Typography>
                </Box>

                <Box flex={1}>
                <Typography color={'white'} align={'center'}>
                        Cookies
                </Typography> 
                <Typography color={'white'} align={'center'}>
                        Data policy
                </Typography>
                </Box>

                <Box flex={1}>
                <Typography color={'white'}  align={'center'}>
                       Categories
                </Typography> 
                <Typography color={'white'} variant={"body2"}  align={'center'}>
                       Kids
                </Typography>
                 <Typography color={'white'} variant={"body2"}  align={'center'}>
                      Men
                </Typography>
                <Typography color={'white'} variant={"body2"}  align={'center'}>
                       Women
                </Typography>
                </Box>
                <Box>
                <Typography color={'white'}  align={'center'}>
                       Follow Us
                </Typography> 
                <Socialbox>
                <Facebook/>
                <Instagram />
                <Twitter />
               </Socialbox>
                </Box>

            </Stack>
        </Box>
    )
}