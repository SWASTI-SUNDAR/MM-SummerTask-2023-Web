import React from 'react'
import { AppBar, Toolbar,Stack,Typography,IconButton, Button} from '@mui/material'
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import { Link, NavLink } from 'react-router-dom';
import { Margin } from '@mui/icons-material';
import Newsbody from './Newsbody';
function Navbar() {
  return (
    <>
    <React.Fragment>
    <AppBar >
      <Toolbar>
      <IconButton >
      <NewspaperRoundedIcon fontSize='large'/>
      </IconButton>
       <Stack direction='row' spacing={2} sx={{marginLeft:'auto'}}>
       <Link color='inherit' to="/news" >LATEST</Link>
       <NavLink color='inherit' to='/'>INDIA</NavLink>
        <NavLink color='inherit'>WORLD</NavLink>
        <NavLink color='inherit'>POLITICS</NavLink>
        <NavLink color='inherit'>SPORTS</NavLink>
       </Stack>
      </Toolbar>
    </AppBar>
   
    </React.Fragment>
    </>
  )
}

export default Navbar
