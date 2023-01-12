import React from 'react'
import { useTheme } from '@emotion/react'
import {Router,Link} from 'react-router-dom'
import { IconButton ,Divider,Chip} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import "./Footer.css";

const Footer = () => {
    const theme = useTheme();
  return (
    <div className='Footer'>
        <div className='address' style={{backgroundColor:theme.palette.background["default"]}}>
        <Divider light>
          <Chip label="Address" />
        </Divider>
            <p>SVNIT</p>
            <p>Surat</p>
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
          <Chip label="CHIP" />
        </Divider>
            <p>Time</p>
            <p>Days</p>
           
        </div>



    </div>
  )
}
export default Footer