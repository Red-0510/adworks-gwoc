import React from 'react'
import { Drawer ,useTheme} from '@mui/material'
import {
  ChevronLeftOutlined
} from "@mui/icons-material";


const Sidebar = ({isSidebarOpen,setIsSidebarOpen}) => {

  const theme=useTheme();

  const menuList=[
    {
      text:"Go Back",
      icon:<ChevronLeftOutlined />
    },
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
          
        </Drawer>
      }
    </div>
  )
}

export default Sidebar