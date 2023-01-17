import React, { useEffect, useState } from 'react'
import { Avatar, Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
 } from '@mui/material';
import ZoomDialog from 'components/ZoomDialog/ZoomDialog';
import { useLoginMutation } from 'state/api';
import {setUser} from "state/store";
import {useDispatch,useSelector} from "react-redux";
import "./Login.css";
import { CloseOutlined, EmailOutlined, PersonOutlineOutlined, VpnKeyOutlined } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
const Login = ({open,setOpen,register}) => {

  const [login,{data,error,isSuccess,isError}] = useLoginMutation();
  const dispatch = useDispatch();
  const theme = useTheme();
  
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")


  function handleLogin(){
    if(password===confirmPassword){
      login({
        username,email,password
      })
        .then(data=>{
          console.log(data);
          dispatch(setUser(data));
        })
        .catch(err=>console.log(err.message));
    }
  }

  useEffect(()=>{
    console.log(data);
  },[isSuccess]);

  // useEffect(()=>{
  // },[])

  return (
    <ZoomDialog open={open} setOpen={setOpen} className="login">
    {/* <div className="login_header"> */}
        <Typography sx={{
          fontSize:"2rem",
          fontWeight:"bold",
          textAlign:"center",
          paddingTop:"0.5rem",
        }}>{register ? "Register" : "Login"}
        </Typography>
        <IconButton onClick={()=>setOpen(false)} sx={{ position:"absolute",right:"0"}}>
          <CloseOutlined sx={{fontSize:"2rem",color:"grey"}}/>
        </IconButton>
      {/* </div> */}
      <FormControl className='form_control'>
        <div className='login_form'>
          {register && (
            <div className="form_field">
              <PersonOutlineOutlined sx={{fontSize:"1.8rem"}}/>
              <TextField label="username" type="text"  margin="dense" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
          )}
          <div className="form_field">
              <EmailOutlined sx={{fontSize:"1.8rem"}}/>
              <TextField label="email" type="email" margin="dense" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="form_field">
              <VpnKeyOutlined sx={{fontSize:"1.8rem"}}/>
              <TextField label="password" type="password" margin="dense" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          {register && (
            <div className="form_field">
              <VpnKeyOutlined sx={{fontSize:"1.8rem"}}/>
              <TextField label="confirm password" type="password" margin="dense" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div>
          ) }
          <Button onclick={handleLogin} sx={{
            backgroundColor:theme.palette.secondary["main"],
            margin:"1rem",
          }}>
            {register 
              ? "Register"
              : "Login"
            }
          </Button>
        </div>
      </FormControl>      
    </ZoomDialog>
  )
}

export default Login;