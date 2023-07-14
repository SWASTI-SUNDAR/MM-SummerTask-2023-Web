import React from 'react'
import "./Style.css"
import { AppBar, Toolbar, Stack, Typography, IconButton, Button, MenuItem, Menu, Tab, useTheme } from '@mui/material'
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';
import { Business, DarkMode, Home } from '@mui/icons-material';
import Drawercmop from './Drawercmop';
import useMediaQuery from '@mui/material/useMediaQuery';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
function Navbar({ change, check }) {
  const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const PAGES = ["Home", "Health", "Science", "Technology", "Business", "Entertainment", "Sports"];
  const theme = useTheme();
  const ismatching = useMediaQuery(theme.breakpoints.down("md"))
  console.log(ismatching)
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <React.Fragment>


      <CssBaseline>
        <AppBar style={{ backgroundColor: '#1B1212' }}>
          <Toolbar>
            {
              ismatching ? (
                <>
                  <Drawercmop />

                  <IconButton style={{ marginLeft: "auto" }}>
                    <NewspaperRoundedIcon style={{ color: 'lightblue' }} />
                  </IconButton>
                  <Typography style={{ color: "aqua", fontFamily: "sans", fontSize: "1.5rem" }}  >
                    <b>NEWS24</b>
                  </Typography>
                  <Stack marginLeft="auto">
                    <Switch {...label} onChange={change} checked={check} />
                  </Stack>

                  <Stack marginLeft="auto" >
                    {
                      isAuthenticated && (
                        <div className='user'>
                          <img src={user.picture} style={{ height: '40px', margin: '' }} alt="" />
                        </div>
                      )

                    }
                  </Stack>

                </>
              ) : (
                <>
                  <IconButton>
                    <NewspaperRoundedIcon style={{ color: 'lightblue' }} />
                  </IconButton>
                  <Typography style={{ color: "aqua", fontFamily: "sans", fontSize: "1.5rem" }}  >
                    <b>NEWS24</b>
                  </Typography>
                  <Stack direction='row' spacing={2} sx={{ marginLeft: 'auto' }}  >
                    {
                      PAGES.map((page, index) => (
                        <NavLink key={index} className={"favbar"} to={page} style={{ textDecoration: 'none' }} ><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', }}>{page}</MenuItem></NavLink>
                      ))
                    }

                  </Stack>
                  <Stack direction='row' spacing={1} sx={{ marginRightt: 'auto', marginLeft: 'auto' }} >

                    {
                      isAuthenticated ? (
                        <Button variant="contained" style={{ backgroundColor: "red" }}
                          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                          Logout
                        </Button>
                      ) : (
                        <Button variant="contained" style={{ backgroundColor: "green" }}
                          onClick={() => loginWithRedirect()}>
                          Login
                        </Button>

                      )
                    }
                  </Stack>
                  <Stack marginLeft={'12px'}>
                    {
                      isAuthenticated && (
                        <div className='user'>
                          <img src={user.picture} style={{ height: '40px', margin: '' }} alt="" />
                        </div>
                      )

                    }
                  </Stack>
                  <Stack>
                    <Switch {...label} onChange={change} checked={check} />
                  </Stack>
                </>
              )
            }
          </Toolbar>
        </AppBar>
      </CssBaseline>

    </React.Fragment>
  )
}

export default Navbar
