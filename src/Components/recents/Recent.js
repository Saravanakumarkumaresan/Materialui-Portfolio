import { Box,Grid} from "@mui/material"
import Accessories from '../../Static/Accessories.jpg'
import { Card } from "../cardfl/Card"

export const Recent=()=>{
    return(
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs:1,sm:2,md:1 }}>
             <Grid item > 
              <Card Accessories={Accessories} />
             </Grid>
             <Grid item md={6} xs={12}>
              <Card Accessories={Accessories} />
             </Grid>
             <Grid item md={6} xs={12}>
              <Card Accessories={Accessories} />
             </Grid>
            </Grid>
            
        </Box>
    )
}