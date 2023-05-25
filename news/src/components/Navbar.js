import React from 'react'
import { AppBar, Toolbar, Stack, Typography, IconButton, Button, MenuItem } from '@mui/material'
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import { Link, NavLink } from 'react-router-dom';
import Newsbody from './Newsbody';
function Navbar() {
  return (
    <>
      <React.Fragment>
        <AppBar style={{backgroundColor:'#1B1212'}} >
          <Toolbar>
           <IconButton>
           <NewspaperRoundedIcon style={{color:'white',}}/>
           </IconButton>
           
            <Stack direction='row' spacing={2} sx={{ marginLeft: 'auto' }} >
              <NavLink to="first" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Home</MenuItem></NavLink>
              <NavLink to="first" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> General</MenuItem></NavLink>
              <NavLink to="first" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Healthy</MenuItem></NavLink>
              <NavLink to="first" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Science</MenuItem></NavLink>
              <NavLink to="first" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Sports </MenuItem></NavLink>
              <NavLink to="first" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Politics </MenuItem></NavLink>
              <NavLink to="first" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> World </MenuItem></NavLink>
              <NavLink to="first" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Bussiness </MenuItem></NavLink>
              <NavLink to="first" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Entertainment </MenuItem></NavLink>
              <NavLink to="first" style={{ textDecoration: 'none' }}><MenuItem style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}> Fashion</MenuItem></NavLink>
            </Stack>
            <Stack direction='row' spacing={2} sx={{ marginLeft: 'auto' }} >
              <Button variant="contained" color='success' >
               Login
              </Button><Button variant="contained" color="success">
              Sing up
              </Button>
            </Stack>

          </Toolbar>
        </AppBar>

      </React.Fragment>
    </>
  )
}

export default Navbar
