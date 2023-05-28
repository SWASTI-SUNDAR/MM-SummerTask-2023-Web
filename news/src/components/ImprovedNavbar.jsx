import { AppBar, Toolbar, Stack, Typography, IconButton, Button, MenuItem, Menu ,Tabs,tab, Tab} from '@mui/material'
import React, { useState } from 'react'
import { Grid } from '@mui/material';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import { NavLink } from 'react-router-dom';
import "./Style.css"

const ImprovedNavbar = () => {
    const[value,setValue]=useState()
    const handleChange=(()=>{

    })
    return (
        <AppBar>
            <Toolbar>
                <Grid container>
                    <Grid item sx={2} md={6}>
                    <NewspaperRoundedIcon fontSize='large'></NewspaperRoundedIcon>
                    </Grid>
                    <Grid item sx={2} md={6} spacing={2}>
                    
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default ImprovedNavbar
