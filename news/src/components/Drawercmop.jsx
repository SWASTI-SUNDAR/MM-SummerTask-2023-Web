import { Drawer,MenuItem,List,ListItem,ListItemText,ListItemButton, linkClasses } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

function Drawercmop() {
    const PAGES=["Home","Health","Science","Technology","Business","Entertainment","Sports"];
    const[openDrawer,setOpenDrawer]=useState(false)
  return (
    <>
   <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
   <List>
   {
       PAGES.map((page,index)=>(
           <ListItemButton key={index} onClick={()=>setOpenDrawer(false)}>
           <ListItemText>
           <NavLink to={page} style={{ textDecoration: 'none',color:"black" }}>
           {page}
           </NavLink>
           </ListItemText>
           </ListItemButton>
           ))
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
