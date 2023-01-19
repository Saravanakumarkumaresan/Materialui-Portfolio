import {AppBar,Box,InputBase,Menu,MenuItem,styled,Toolbar, Typography} from '@mui/material'
import {Facebook,Instagram,Menu as MenuIcon,Twitter} from '@mui/icons-material/';
import { useState } from 'react';

export const Navbar=()=>{
    const StyledToolbar=styled(Toolbar)(
        {
            display:'flex',
            justifyContent:'space-between'
        }
    );
    const Socialbox=styled(Box)({
        display:'flex',
        gap:10
    })
    const Menubox=styled(Box)({
        display:'flex',
        gap:20
    })

    const Serachbox=styled(Box)({
        display:'flex',
        gap:6
    })

    const MenuItems=[{Name:'Home',Link:'/'},
    {Name:'Products',Link:'#'},
    {Name:'Portfolio',Link:'#'},
    {Name:'Blog',Link:'#'},
    {Name:'Contact Us',Link:'#'}]

    const [open, setOpen]=useState(false)
  return(
    
        <AppBar sx={{background:"black"}} position='static'>
         <StyledToolbar> 
            <Socialbox>
                <Facebook/>
                <Instagram />
                <Twitter />
            </Socialbox>
            <Menubox sx={{ display:{xs:'none',sm:'none',md:'flex'} }}>
                {MenuItems.map((item)=>(
                    <Typography sx={{cursor:'pointer',fontSize:'14px'}}>{item.Name}</Typography>
                ))}
            </Menubox>
            <Serachbox><InputBase placeholder='Search...' sx={{color:'white'}}/>
            <MenuIcon sx={{color:'white',
             display:{xs:'block',sm:'block',md:'none'}}}
             onClick={()=>setOpen(!open)}
             />
             
            </Serachbox>
         </StyledToolbar>
         <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        >
            <Box sx={{width:350,height:'90vh'}}>
            {MenuItems.map((item)=>(
                    <MenuItem sx={{cursor:'pointer',fontSize:'14px'}}>{item.Name}</MenuItem>
                ))}
            </Box>   
      </Menu>
        </AppBar>
    
  )
}