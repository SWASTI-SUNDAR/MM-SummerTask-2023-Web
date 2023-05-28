import React from 'react'
import "./Style.css"
import { AppBar, Toolbar, Stack, Typography, IconButton, Button, MenuItem, Menu,Tab } from '@mui/material'
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
function Navbar({change,check}) {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <React.Fragment>
      <CssBaseline>
        <AppBar style={{ backgroundColor: '#1B1212' }} >
          <Toolbar>
            <IconButton>
              <NewspaperRoundedIcon style={{ color: 'lightblue' }} />
            </IconButton>
            <Typography style={{color:"aqua",fontFamily:"sans",fontSize:"1.5rem"}}  >
            <b>NEWS24</b>
            </Typography>
            <Stack direction='row' spacing={2} sx={{ marginLeft: 'auto' }}  >
              <NavLink className={"favbar"} to="/home" style={{ textDecoration: 'none' }} ><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', }}> Home</MenuItem></NavLink>
              <NavLink className={"favbar"} to="/health" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', }}> Health</MenuItem></NavLink>
              <NavLink className={"favbar"} to="/science" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', }}> Science</MenuItem></NavLink>
              <NavLink className={"favbar"} to="/technology" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', }}> Technology</MenuItem></NavLink>
              <NavLink className={"favbar"} to="/sports" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', }}> Sports </MenuItem></NavLink>
              <NavLink className={"favbar"} to="/business" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', }}> Business </MenuItem> </NavLink>
              <NavLink className={"favbar"} to="/entertainment" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13 }}> Entertainment </MenuItem></NavLink>
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
              <Switch {...label} onChange={change} checked={check} />
          </Toolbar>
        </AppBar>
      </CssBaseline>
    </React.Fragment>
  )
}

export default Navbar
