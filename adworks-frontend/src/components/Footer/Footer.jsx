import React from 'react'
import { useTheme } from '@emotion/react'
import {Router,Link, Navigate,useNavigate} from 'react-router-dom'
import { IconButton ,Divider,Chip} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import "./Footer.css";
import { Phone } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <div className='Footer'>
      <Divider />
      <div id="navigate">
        <ul>
          <li onClick={()=>{navigate("./our-team")}}>Meet The Team</li>
          <li onClick={()=>{navigate("./our-work")}}>Our Work</li>
          <li onClick={()=>{navigate("./services")}}>Our Services</li>
          <li onClick={()=>{navigate("./contact")}}>Contact Us</li>
          <li onClick={()=>{navigate("./privacy-policy")}}>Privacy Policy</li>
        </ul>
        <div>
          <FacebookIcon></FacebookIcon>
          <InstagramIcon></InstagramIcon>
          <LinkedInIcon></LinkedInIcon>
        </div>
      </div>
      {/* <Divider /> */}
      <div id="info">
        <address>Sardar Vallabhbhai National Institute Of Technology, Surat. Ichchhanath</address>
        <p>T: 1234567890</p>
        <p>E: abcdefghijkl@mnopqr.stuvw.xyz</p>
      </div>
      {/* <Divider /> */}
      <div id="map">
        <iframe title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                    width="300"
                    height="200"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0">
            </iframe>
      </div>
        {/* <div className='address' style={{backgroundColor:theme.palette.background["default"]}}>
        <Divider light>
          <Chip label="Address" />
        </Divider>
            <p>SVNIT</p>
            <p>Surat</p>
            <p style={{color:"#2879ff"}}>Get Directions <IconButton>
            <Link to={{ pathname: "https://goo.gl/maps/gRVbesFmkq6Viygu8"} } target="_blank" > <ChevronRightRoundedIcon sx={{ color: "#2879ff" }} /></Link>
            </IconButton> </p>
        </div>
        
        <div className='social_media'>
        <Divider light>
          <Chip label="Social Media" />
        </Divider>
            <div className='link_buttons'>
            <IconButton>
            <Link to={{ pathname: "https://mui.com/material-ui/react-css-baseline/"} } target="_blank" > <LinkedInIcon sx={{ color: "#ffffff" }} /></Link>
            </IconButton>
            <IconButton>
            <Link to={{ pathname: "https://mui.com/material-ui/react-css-baseline/"} } target="_blank" > <FacebookIcon sx={{ color: "#ffffff" }}/></Link>
            </IconButton>
            <IconButton>
            <Link to={{ pathname: "https://mui.com/material-ui/react-css-baseline/"} } target="_blank" > <InstagramIcon sx={{ color: "#ffffff" }}/></Link>
            </IconButton>
            <IconButton>
           
           <Link className='link' to={{ pathname: "https://mui.com/material-ui/react-css-baseline/"} } target="_blank" > <TwitterIcon sx={{ color: "#ffffff" }}/></Link>
            </IconButton>   
            </div>
            </div>
        <div className='active_time'>
        <Divider light>
          <Chip label="Timings......" />
        </Divider>
            <p>Time</p>
            <p>Days</p>
           
        </div> */}
    </div>
  )
}
export default Footer