import React, { useEffect, useState } from 'react'
import { Dialog,Zoom,DialogActions,DialogContent,DialogContentText,Button,DialogTitle } from '@mui/material';
import ZoomDialog from 'components/ZoomDialog/ZoomDialog';
import { useLoginMutation } from 'state/api';
import {setUser} from "state/store";
import {useDispatch,useSelector} from "react-redux";
const Login = ({open,setOpen}) => {
  const [login,{data,error,isSuccess,isError}] = useLoginMutation();
  const dispatch = useDispatch();
  const user=useSelector(state=>state.global.user)
  function handleClick(){
    login({
      username:"jainesh",
      email:"hello@mail.com",
      profile:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
    })
      .then(data=>{
        console.log(data);
        dispatch(setUser(data));
      })
      .catch(err=>console.log(err.message));
  }

  useEffect(()=>{
    console.log(user);
  },[user]);


  return (
    <ZoomDialog open={open} setOpen={setOpen}>
      Login
      <Button onClick={handleClick}>Close</Button>
    </ZoomDialog>
  )
}

export default Login;