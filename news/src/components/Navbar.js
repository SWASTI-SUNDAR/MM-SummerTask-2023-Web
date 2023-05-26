import React from 'react'
import './Style.css';
import { AppBar, Toolbar, Stack, Typography, IconButton, Button, MenuItem } from '@mui/material'
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <React.Fragment>
      <AppBar style={{ backgroundColor: '#1B1212' }}>
        <Toolbar>
          <IconButton>
            <NewspaperRoundedIcon style={{ color: 'white', }} />
          </IconButton>
          <Stack direction='row' spacing={2} sx={{ marginLeft: 'auto' }} >
            <NavLink to="/home" style={{ textDecoration: 'none' }} ><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white', }}> Home</MenuItem></NavLink>
            <NavLink to="/general" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Crypto</MenuItem></NavLink>
            <NavLink to="/health" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Health</MenuItem></NavLink>
            <NavLink to="/science" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Science</MenuItem></NavLink>
            <NavLink to="/sports" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Sports </MenuItem></NavLink>
            <NavLink to="/education" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Education</MenuItem></NavLink>
            <NavLink to="/world" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> World </MenuItem></NavLink>
            <NavLink to="/bussiness" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Bussiness </MenuItem></NavLink>
            <NavLink to="/entertainment" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Entertainment </MenuItem></NavLink>
            <NavLink to="/fashion" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Fashion</MenuItem></NavLink>
          </Stack>
          
          <Stack direction='row' spacing={1} sx={{ marginRightt: 'auto',marginLeft: 'auto' }} >
           
            {
              isAuthenticated ? (
                <Button variant="contained" style={{backgroundColor:"red"}}
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Logout
                </Button>
              ) : (
                <Button variant="contained" style={{backgroundColor:"green"}}
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
              <img src={user.picture} style={{height:'40px',margin:''}} alt="" />
              </div>
            )
          }
          </Stack>
        </Toolbar>
      </AppBar>

    </React.Fragment>
  )
}

export default Navbar
