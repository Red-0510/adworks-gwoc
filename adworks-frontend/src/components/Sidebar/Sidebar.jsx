import React,{useState,useEffect} from 'react'
import { Drawer ,
  useTheme,
  // Button, 
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
  GroupSharp,
  ContactPageSharp,
  MiscellaneousServicesOutlined,
  CurrencyRupeeOutlined,
  GradeOutlined,
  EqualizerOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'state/api';
import MyButton from "components/MyButton/MyButton";
import Login from 'scenes/Login/Login';
import "./Sidebar.css";
import _ from "lodash";
import MyFlexPaper from 'components/MyFlexPaper/MyFlexPaper';
import DashBoard from 'components/DashBoard/DashBoard';
// import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const menuList=[
  {
    text:"Home",
    icon:<HomeOutlined />
  },
  {
    text:"Services",
    icon:<MiscellaneousServicesOutlined />
  },{
    text:"Our work",
    icon:<GradeOutlined />
  },{
    text:"Pricing",
    icon:<CurrencyRupeeOutlined />
  },{
    text:"Our Team",
    icon:<GroupSharp/>
  },{
    text:"Contact",
    icon:<ContactPageSharp />
  },
];

  //add this lines in Login component
  // const [login,{data,isSuccess,isError,error}]=useLoginMutation();
  
  // const handlelogin = ()=>{
  //   // handle the use
  //   login({email,password});
  // }

  useEffect(()=>{
    console.log("succesful logged in",data);
  },[isSuccess])

  const {pathname} = useLocation();
  const [active,setActive] = useState("");
  const theme=useTheme();
  const navigate = useNavigate();
  const [loginOpen,setLoginOpen]=useState(false);
  const [signUpOpen,setSignUpOpen]=useState(false);
  const [dashBoardOpen,setDashBoardOpen] = useState(false);
  // UseEffects hooks
  useEffect(()=>{
    setActive(pathname.substring(1));
    setIsSidebarOpen(false);
    setDashBoardOpen(false);
  },[pathname]);

  return (
    <div className="sidebar">
        <Drawer
          open={isSidebarOpen}
          onClose={()=>setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width:"60%",
            "& .MuiDrawer-paper":{
              color:theme.palette.secondary[100],
              backgroundColor:"transparent",
              boxShadow: `154px 0px 196px 50px black inset`,
              boxSizing:"border-box",
              width:"230px",
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
              <ListItem disablePadding>
                <div className="login">
                  <MyButton  size="large" 
                    onClick={handlelogin}
                    sx={{borderRadius:"10px"}}>Sign In</MyButton>
                  <MyButton size="large"  
                    onClick={()=>navigate("/login")}
                    sx={{borderRadius:"10px"}}>Login</MyButton>
                </div>
              </ListItem>
              {/* <ListItem disablePadding>
                  <DashBoard dashBoardOpen={dashBoardOpen}/>
              </ListItem> */}
              {menuList.map(({text,icon})=>{
                // if(icon==="") return( //to be used if want labels in Sidebar
                //   <Typography key={text} >text</Typography> 
                // );
                const textLower=_.kebabCase(text);
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton 
                      onClick={()=>{
                        navigate(`/${textLower}`);
                        setActive(textLower);
                      }}
                      sx={{
                      backgroundColor:"transparent",
                      color:(active === textLower
                            ? theme.palette.neutral.main 
                            : theme.palette.secondary.main
                        ),
                      boxShadow:( active===textLower
                            ? `180px 0 90px -60px inset ${theme.palette.ternary.main} `
                            : "none"
                        ),  
                      }}>
                      <ListItemIcon>
                        {icon}
                      </ListItemIcon>
                      <Typography key={text} sx={{
                        fontWeight:(textLower===active
                            ? "bold"
                            : "400"
                          ),
                      }}>{text}</Typography> 
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Drawer>
    </div>
  )
}

export default Sidebar;
export {menuList};