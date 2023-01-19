import { Box, Container, Typography,Stack } from "@mui/material"
import { Rightbar } from "../Components/rightbar/Rightbar"
import Accessories from '../Static/Accessories.jpg'

export const Details=()=>{
    return(
        <Box>
          <Box sx={{
            backgroundImage:`url(${Accessories})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            height:"250px"
          }}>
            <Typography
            align="center"
            color={'black'}
            variant='h2'
            sx={{ fontWeight:900,padding:10}}
            >
                Clicked Posted Title.
            </Typography>
          </Box>
          <Container>
            <hr />
            <Stack direction={{ xs:'column',md:'row'}} spacing={{ xs:1, sm:2, md:8}} mt={8}>
              <Box flex={3} sx={{ padding:'18px 100px 100px 100px'}}>
               <Typography m={4} align='center' color={'grey'} variant='body1' sx={{ fontWeight:900}}>
                <h1><b>Info </b></h1>
               Getting a full 8-hours can feel near-impossible. From comfort to warmth, what you wear in bed is essential for improving your quality of sleep. With a silky fabric and elegant, airy fit, our sleepwear gives you space to breathe. Our superior comfort puts you on the right track for incredible sleep. Emphasizing your shape in all the right places, with our sleepwear, you don’t have to sacrifice style for comfort – to us, it’s the same thing.

               This description is all about anticipating problems. People get frustrated when they can’t sleep – we’re letting fashion become part of the solution. Because you sell more than just clothing.
               </Typography>
              </Box>
              <Box>
                <Rightbar />
              </Box>
            </Stack>
          </Container>
         </Box>
    )
}