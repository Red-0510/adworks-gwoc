import React from 'react'
import { Typography,Button, useTheme,IconButton } from '@mui/material'
import {Menu } from "@mui/icons-material";


import logo from "assets/images/logo192.png";
import "./Navbar.css";
const Navbar = ({isSidebarOpen,setIsSidebarOpen}) => {
    const theme=useTheme();
  return (
    <div className='navbar'>
        <IconButton onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
            <Menu sx={{fontSize:"32px"}}/>
        </IconButton>
      <Button sx={{
        display:"flex",
        alignItems:"center",
        m:"0.5rem 0",
        gap:"1rem"
      }}>
        <img src={logo} className='logo' alt="Logo" />
        <Typography fontWeight="bold" fontSize="20px" sx={{color:theme.palette.secondary[300]}}>
          AdWorks
        </Typography>
      </Button>
    </div>
  )
}

export default Navbar;