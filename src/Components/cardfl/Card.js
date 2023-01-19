import { Box, CardContent, CardMedia,Typography } from "@mui/material"

export const Card=({Accessories})=>{
    return(
        <Box>
            <CardMedia
          component="img"
          height="100"
          image={Accessories}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" align="center" color={'tomato'} component="div">
            Lists
          </Typography>
          <Typography gutterBottom variant="h5" align="center"  component="div">
            All Accessories
          </Typography>
          <Typography variant="h5" align="center" color='text.secondary'>
            It is a one store for  all fashion things.
          </Typography>
        </CardContent>
        </Box>
    )

}