import { Box, Container, Stack } from "@mui/material"
import { Categories } from "../Category/Categories"
import { Hero } from "../Hero/Hero"
import { Recent } from "../recents/Recent"
import { Rightbar } from "../rightbar/Rightbar"

export const Home=()=>{
    return(
        <Box>
            <Hero />
            <Container>
                <Categories />
                <hr />
             <Stack direction={'row'} spacing={8} mt={8}>
                <Box flex={3} sx={{ padding:"18px 100px 100px 100px"}}>
                    <Recent />
                </Box>
               <Box flex={1}>
                <Rightbar />
               </Box>
            </Stack>
            </Container>
        </Box>
    )
}