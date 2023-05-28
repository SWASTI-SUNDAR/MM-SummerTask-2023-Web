import React from 'react'
import { Grid, Typography, Stack } from "@mui/material"
function Footer() {
    return (
        <div style={{ backgroundColor: '#1B1212',color:"white" }}> 
            <Grid container justifyContent="center" textAlign="center" direction="column">
            <Grid item justifyContent="center" textAlign="center">
               <h3> <b>
               NEWS24
               </b>
              </h3>
               <p>Copyright © 2023 News24.inc</p>
            </Grid>
            <div style={{display:"flex",justifyContent:"center"}}>
                <a >Legal Stuff</a>
                <a style={{marginLeft:"10px"}}>|</a>
                <a style={{marginLeft:"10px"}}>Privacy Policy</a>
                <a style={{marginLeft:"10px"}}>|</a>
                <a style={{marginLeft:"10px"}}>Security</a>
            </div>
                
            </Grid>
        </div>
    )
}

export default Footer
