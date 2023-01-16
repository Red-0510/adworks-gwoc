import React, { useEffect, useState } from 'react'
import { Dialog,Zoom,DialogActions,DialogContent,DialogContentText,Button,
  FormControl,
  TextField,
 } from '@mui/material';
import ZoomDialog from 'components/ZoomDialog/ZoomDialog';
import { useLoginMutation } from 'state/api';
import {setUser} from "state/store";
import {useDispatch,useSelector} from "react-redux";
import './Sign.css'

const SignUp = () => {

  const [login,{data,isSuccess,isError,error}]=useLoginMutation();
  
  const handleLogin = ()=>{
    // handle the use
    const email="abcd@gmail.com";
    const password = "abcd";
    login({email,password});
  }

  const user = useSelector(state=>state.global.user);
  return (
    <div>
        <FormControl>
        <div className='signup_form'>
          {!user && <TextField label="username" type="text" variant='outlined' margin="dense"/>}
          <TextField label="email" type="email" variant='outlined' margin="dense"/>
          <TextField label="password" type="password" variant='outlined' margin="dense"/>
          {!user && <TextField label="confirm password" type="password" variant='outlined' margin="dense"/> }
          <Button onclick={handleLogin}>
            {user 
              ? "Login"
              : "Register"
            }
          </Button>
        </div>
      </FormControl>      
    </div>

    // <form className="signup_form">
    //   <label for="username">Username</label>
    //   <input type="text" placeholder="Username" id="username" />
    //   <label for="password">Password</label>
    //   <input type="Password" placeholder="Password" id="password" />
    //   <label for="password">Confirm Password</label>
    //   <input type="Password" placeholder="Confirm Password" id="password" />
    //   <button type="submit">Register</button>
    // </form>
  )
}

export default SignUp;