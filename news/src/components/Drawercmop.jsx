import { Drawer,MenuItem,List,ListItem,ListItemText,ListItemButton, linkClasses } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import {  Button } from '@mui/material'
function Drawercmop() {
    const PAGES=["Home","Health","Science","Technology","Business","Entertainment","Sports"];
    const[openDrawer,setOpenDrawer]=useState(false)
    const {user, loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {  isAuthenticated } = useAuth0();
  return (
    <>
   <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
   <List>
   {
    isAuthenticated && (<>
      <div className='user'>
        <img src={user.picture} style={{ height: '40px', margin: '' }} alt="" />
      </div>
      
      <div style={{display:"flex",justifyContent:"center",padding:"2px",marginTop:"1rem",fontSize:"large"}} >
        <b>Hello </b>
        <i>
        {user.name ? user.name.slice(0,6):("")}
        </i>
      </div>
      </>
    )
  }
    <div style={{display:"flex",justifyContent:"center",fontWeight:"700"}}>
    CATEGORIES
    </div>
   {
       PAGES.map((page,index)=>(
           <ListItemButton key={index} onClick={()=>setOpenDrawer(false)}>
           <ListItemText >
           <NavLink to={page} style={{ textDecoration: 'none',color:"black"}}>
           {page}
          
           </NavLink>
           </ListItemText>
           </ListItemButton>
           ))
   }
   {
    
      isAuthenticated ? (
        <Button variant="contained" style={{ backgroundColor: "red", marginLeft:".8rem",marginTop:"30vh", }}
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Logout
        </Button>
      ) : (
        <Button variant="contained" style={{ backgroundColor: "green", marginLeft:".8rem",marginTop:"35vh" }}
          onClick={() => loginWithRedirect()}>
          Login
        </Button>

      )
   }
   </List>
   </Drawer>
   <IconButton onClick={()=>setOpenDrawer(!openDrawer)} style={{color:"white"}} >
   <MenuIcon/>
   </IconButton>
   </>
  )
}

export default Drawercmop;
