import { FormControl, TextField , Typography} from '@mui/material'
import React from 'react'
import MyFlexPaper from 'components/MyFlexPaper/MyFlexPaper';

import "./Contact.css";

const Contact = () => {
  return (
      <div className="contact">
          <div className="square1 move"></div>
      <div className="square2 move"></div>
      <div className="square3 move"></div>
      <div className="square4 move"></div>
      <div className="square5 move"></div>
      <div className="home_landing">
        <div className="landing_text">
          <h1 className="h1-seo">AdWorks</h1>
          <h3>We Would Love To Hear From You!</h3>
              </div>
              </div>
        <Typography variant='p' component="h3" align='center'>Get In Touch</Typography>
            <MyFlexPaper elevation={8} className="contact_paper" sx={{
                borderRadius:"1rem",
                flex:1,
                padding:"1rem 2rem",
            }} >
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
        </MyFlexPaper>
    </div>
  )
}

export default Contact