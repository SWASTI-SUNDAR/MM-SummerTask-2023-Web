import React from 'react'
import { AppBar, Toolbar,Stack,Typography,IconButton, Button} from '@mui/material'
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

import { Margin } from '@mui/icons-material';
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
       <Button color='inherit' >LATEST</Button>
       <Button color='inherit'>INDIA</Button>
        <Button color='inherit'>WORLD</Button>
        <Button color='inherit'>POLITICS</Button>
        <Button color='inherit'>SPORTS</Button>
       </Stack>
      </Toolbar>
    </AppBar>
    </React.Fragment>
    </>
  )
}

export default Navbar
