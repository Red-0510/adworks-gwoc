import React from 'react'
import { Drawer ,
  useTheme,
  Button, 
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  ChevronLeftOutlined,
} from "@mui/icons-material";


const Sidebar = ({isSidebarOpen,setIsSidebarOpen}) => {

  const theme=useTheme();

  const menuList=[
    {
      text:"Home",
      icon:""
    },
    {
      text:"Services",
      icon:""
    },{
      text:"Our work",
      icon:""
    },{
      text:"Pricing",
      icon:""
    },{
      text:"Our Team",
      icon:""
    },{
      text:"Contact",
      icon:""
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
              color:theme.palette.secondary[200],
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
            </List>
          </div>
        </Drawer>
      }
    </div>
  )
}

export default Sidebar