import { Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
// import MyFlexPaper from 'components/MyFlexPaper/MyFlexPaper';
import { Paper } from "@mui/material";

import "./Contact.css";
import "./../Home/Home.css";
import { useTheme } from "@emotion/react";

const Contact = () => {
  const theme = useTheme();
  return (
    <div className="contact">
      <div className="square1 move"></div>
      <div className="square2 move"></div>
      <div className="square3 move"></div>
      <div className="square4 move"></div>
      <div className="square5 move"></div>
      <div className="home_landing" style={{height:"30vh"}}>
        <div className="landing_text">
          <h1 className="h1-seo">AdWorks</h1>
          <h3>We Would Love To Hear From You!</h3>
        </div>
      </div>
      <div className="contact_form">
        <Typography variant="h4" component="h2" align="center">
          Get In Touch
        </Typography>
        <Paper
          className="contact_paper"
          elevation={8}
          sx={{
            borderRadius: "1rem",
            flex: 1,
            padding: "1rem 2rem",
            backgroundColor: theme.palette.mode === "dark" ? theme.palette.primary[100] : theme.palette.primary[400],
          }}
        >
          <FormControl className="contact_formControl">
            <div className="contact_container">
              <div className="form_container">
                <TextField
                  className="contacts contact_item1"
                  label="Name"
                  type="text"
                  variant="outlined"
                  margin="dense"
                />
                <TextField
                  className="contacts contact_item2"
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="dense"
                />
                {/* <TextField className='item3' label="Product Name" type="text" variant='outlined' margin="dense"/> */}
              </div>
              <div className="form_container">
                <TextField
                  className="contacts contact_item4"
                  width="1000px"
                  label="Subject"
                  type="text"
                  variant="outlined"
                  margin="dense"
                />
              </div>
              <div className="form_container">
                <TextField
                  className="contacts contact_item5"
                  label="Message"
                  rows={15}
                  cols={15}
                  multiline
                  margin="dense"
                />
              </div>
              <div>
                <Button
                  sx={{
                    backgroundColor: theme.palette.secondary["main"],
                    color:theme.palette.neutral.main,
                    margin: "1rem",
                    width: "150px",
                    height: "50px",
                    fontSize: "medium"
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </FormControl>
        </Paper>
      </div>
    </div>
  );
};

export default Contact;
