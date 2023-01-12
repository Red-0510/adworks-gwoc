import React from 'react'
// import { IconButton ,Divider,Chip} from '@mui/material'
import { Drawer ,
  useTheme,
  Button, 
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider
} from '@mui/material'
import {
  ChevronLeftOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import MyButton from "components/MyButton/MyButton";

import "./Sidebar.css";
const Sidebar = ({isSidebarOpen,setIsSidebarOpen}) => {

  const theme=useTheme();
  const menuList=[
    {
      text:"Home",
      icon:<HomeOutlined />
    },
    {
      text:"Services",
      icon:<HomeOutlined />
    },{
      text:"Our work",
      icon:<HomeOutlined />
    },{
      text:"Pricing",
      icon:<HomeOutlined />
    },{
      text:"Our Team",
      icon:<HomeOutlined/>
    },{
      text:"Contact",
      icon:<HomeOutlined />
    },
  ]

  return (
    <div className='sidebar'>
      {isSidebarOpen && 
        <Drawer
          open={isSidebarOpen}
          onClose={()=>setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width:"60%",
            "& .MuiDrawer-paper":{
              color:theme.palette.secondary[100],
              backgroundColor:theme.palette.background.alt,
              boxSizing:"border-box",
              width:"60%",
            }
          }}
        >
          <div className='user_info'>
            <List>
              <ListItem>
                <IconButton onClick={()=>setIsSidebarOpen(false)}>
                  <ChevronLeftOutlined />
                </IconButton>
              </ListItem>
              <ListItem>
                <div className="login">
                  <MyButton  size="large" sx={{borderRadius:"10px"}}>Sign In</MyButton>
                  <MyButton size="large"  sx={{borderRadius:"10px"}}>Login</MyButton>
                </div>
              </ListItem>
              {menuList.map(({text,icon})=>{
                console.log(text,icon)
                if(icon==="") return(
                  <Typography key={text} >text</Typography> 
                );
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton sx={{backgroundColor:"transparent",color:theme.palette.neutral.main}}>
                      <ListItemIcon>
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Drawer>
      }
    </div>
  )
}

export default Sidebar