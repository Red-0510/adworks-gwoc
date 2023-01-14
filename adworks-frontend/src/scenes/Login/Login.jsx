import React, { useState } from 'react'
import { Dialog,Zoom,DialogActions,DialogContent,DialogContentText,Button,DialogTitle } from '@mui/material';
import ZoomDialog from 'components/ZoomDialog/ZoomDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom timeout={500} ref={ref} {...props} />;
});

const Login = ({open,setOpen}) => {
  return (
    <ZoomDialog open={open} setOpen={setOpen}>
      Login
    </ZoomDialog>
  )
}

export default Login;