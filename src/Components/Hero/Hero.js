import { Box, Typography } from "@mui/material"
import Heroimg from '../../Static/Heroimg.jpeg'

export const Hero=()=>{
    return(
        <Box>
            <Typography variant="h3" align="center" sx={{fontweight:900}}>
                Fashion<b style={{color:'red'}}>Blog</b>
            </Typography>
            <Typography variant="body2" align="center" sx={{fontweight:100}}>
                We Makes You Look Better Of You !
            </Typography>
            <Box
                sx={{
                   backgroundImage: `url(${Heroimg})`,
                   backgroundRepeat:"no-repeat",
                   backgroundColor:"black",
                   backgroundAttachment:'fixed',
                   backgroundPosition:"center",
                   backgroundSize:'cover',
                   height:600,
                   width:"100%",
                   display:'flex',
                   justifyContent:'center'
                }} >
           
            <Box sx={{width:{xs:'100%',sm:'50%',md:'40%'},
             padding:{xs:3,sm:2,md:20} }}>
            <Box
             sx={{background:'white', opacity:'0.8'}}>
                <Typography variant={"h6"} color='tomato' align="center" pt={8}>
                    Trending Styles.
                </Typography>
                <Typography variant='h4'align="center">
                    Life is boring without Fashion
                </Typography>
                <Typography variant='body1'align="center" pb={8}>
                    We love to change your style lorem ipsum
                </Typography>
            </Box>
            </Box>
        </Box>
        </Box>

    )
}