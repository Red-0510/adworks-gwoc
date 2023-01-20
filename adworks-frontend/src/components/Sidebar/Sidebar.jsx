import React,{useState,useEffect} from 'react'
import { Drawer ,
  useTheme,
  // Button, 
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Avatar,
  Collapse,
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
import { Navigate, Route, useLocation, useNavigate } from 'react-router-dom';
// import { useLoginMutation } from 'state/api';
import {useSelector} from "react-redux"
import MyButton from "components/MyButton/MyButton";
import Login from 'scenes/Login/Login';
import "./Sidebar.css";
import _ from "lodash";
import MyFlexPaper from 'components/MyFlexPaper/MyFlexPaper';
// import DashBoard from 'components/DashBoard/DashBoard';
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
    text:"Our Team",
    icon:<GroupSharp/>
  },{
    text:"Contact",
    icon:<ContactPageSharp />
  },
];

const Sidebar = ({isSidebarOpen,setIsSidebarOpen}) => {

  // useEffect(()=>{
  //   console.log("succesful logged in",data);
  // },[isSuccess])
  const user = useSelector((state)=>state.global.user)
  const {pathname} = useLocation();
  const [active,setActive] = useState("");
  const theme=useTheme();
  const navigate = useNavigate();
  const [loginOpen,setLoginOpen]=useState(false);
  const [register,setRegister]=useState(false);
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
              boxShadow:(theme.palette.mode==="dark") ? `154px 0px 196px 50px inset black` : `154px 0px 196px 50px inset ${theme.palette.primary[300]}`,
              boxSizing: "border-box",
              width:"30%",
              "@media only screen and (max-width:800px)": {
                width:"75%"
              }
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
                  {user 
                    ? <MyFlexPaper sx={{
                      padding:"0.2rem 1rem",
                      margin:"0.8rem 0.2rem",
                      borderRadius:"10px",
                    flex: 1,
                      justifyContent:"space-evenly!important"
                    }}>
                        <Avatar src={user.profile} />
                        <Typography>{user.username}</Typography>
                        {/* <IconButton onClick={()=>setDashBoardOpen(!dashBoardOpen)}> */}
                          {/* <EqualizerOutlined sx={{fontSize:"32px"}} /> */}
                        {/* </IconButton> */}
                      </MyFlexPaper>
                    :
                      <MyFlexPaper sx={{
                        padding:"0.2rem 1rem",
                        margin:"0.8rem 0.2rem",
                        borderRadius:"10px",
                        flex:1,
                      }}>
                        <MyButton  size="large" 
                          onClick={()=>{
                            setLoginOpen(true);
                            setRegister(false);
                          }}
                          sx={{borderRadius:"10px"}}>SignIn</MyButton>
                        <MyButton size="large"  
                          onClick={()=>{
                            setLoginOpen(true);
                            setRegister(true);
                          }}
                          sx={{borderRadius:"10px"}}>signUp</MyButton>
                        <div>
                          <Login open={loginOpen} setOpen={setLoginOpen} register={register}/>
                        </div>
                      </MyFlexPaper>
                  }
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
                  <ListItem claa key={text} disablePadding>
                    <ListItemButton 
                      onClick={()=>{
                        navigate(`/${textLower}`);
                        setActive(textLower);
                      }}
                      sx={{
                      backgroundColor:"transparent",
                      color:(theme.palette.mode==="dark")?(active === textLower
                            ? theme.palette.neutral.main 
                            : theme.palette.secondary.main
                        ):(active === textLower
                            ? theme.palette.neutral[300] 
                            : theme.palette.secondary[300]),
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
                        color:theme.palette.neutral[400],
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