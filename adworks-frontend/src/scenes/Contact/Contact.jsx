import { FormControl, TextField ,Paper, Typography} from '@mui/material'
import React from 'react'

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
        <Paper elevation={8} className="contact_paper" sx={{
            borderRadius:"1rem",
            flex:1,
            padding:"1rem 2rem",
        }} >
            <Typography variant='p' component="h3" align='center'>Get In Touch</Typography>
            <FormControl>
                <div className="form_container">
                    <TextField label="Name" type="text" variant='outlined' margin="dense"/>
                    <TextField label="email" type="email" variant='outlined' margin="dense"/>
                    <TextField label="Product Name" type="text" variant='outlined' margin="dense"/>
                </div>
                <div className="form_container">
                    <TextField label="Subject" type="text" variant='outlined' margin="dense"/>
                    <TextField label="Message" rows={5} multiline margin="dense"/>
                </div>
            </FormControl>
        </Paper>
    </div>
  )
}

export default Contact