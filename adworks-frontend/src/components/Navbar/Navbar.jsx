import React from 'react'
import { Typography,Button,useTheme,IconButton } from '@mui/material'
import {Menu,
  DarkModeOutlined,
  LightModeOutlined,
  // SettingsOutlined,
  // ImagesearchRoller
} from "@mui/icons-material";
// redux
import {setMode} from "state/store"
import {useDispatch} from "react-redux";

import "./Navbar.css";
// import MyButton from 'components/MyButton/MyButton';

import logo from "assets/images/logo192.png";
import profile from "assets/images/profile.png"
const Navbar = ({isSidebarOpen,setIsSidebarOpen}) => {
  const theme=useTheme();
  const dispatch = useDispatch();
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
        <img src={logo} className="logo" alt="Logo" />
        <Typography fontWeight="bold" fontSize="20px" sx={{color:theme.palette.neutral[300]}}>
          AdWorks
        </Typography>
      </Button>
      <div className='info'>
        <IconButton onClick={()=>dispatch(setMode())}>
          {
            (theme.palette.mode==="dark") 
             ? <DarkModeOutlined sx={{fontSize:"32px"}}/>
             : <LightModeOutlined sx={{fontSize:"32px"}}/>
          }
        </IconButton>
        <IconButton>
          <img src={profile} className="logo" />
        </IconButton>
      </div>
    </div>
  )
}

export default Navbar;