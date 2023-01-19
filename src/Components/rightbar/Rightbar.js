import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Jewells from "../../Static/Jewells.jpg"
import Watch from "../../Static/Watch.jpg"
import Bangles from "../../Static/Bangles.jpg"


export const Rightbar=()=>{
    return(
       <Box>
        <Typography align='center' bgcolor={'black'} color='white'>
            Most Popular !
        </Typography>
      <List sx={{ width: '100%',height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{ height:80,width:80}} variant='square' alt="Remy Sharp" src={Jewells} />
        </ListItemAvatar>
        <ListItemText
          secondary= {"Jewells make ladies into a queen..."}
          />     
      </ListItem>
      </List>

      <Typography align='center' bgcolor={'black'} color='white'>
            Most Popular !
        </Typography>
      <List sx={{ width: '100%',height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{ height:80,width:80}} variant='square' alt="Remy Sharp" src={Watch} />
        </ListItemAvatar>
        <ListItemText
          secondary= {" Every minute is very crucial calculate your time..!"}
          />     
      </ListItem>
      </List>

      <Typography align='center' bgcolor={'black'} color='white'>
            Most Popular !
        </Typography>
      <List sx={{ width: '100%',height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{ height:80,width:80}} variant='square' alt="Remy Sharp" src={Bangles} />
        </ListItemAvatar>
        <ListItemText
          secondary= {" Don't want alarm becauseof your bangles sound"}
          />     
      </ListItem>
      </List>

       </Box>
    )
}