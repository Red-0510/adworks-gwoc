import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import profile from "./../../assets/images/profile.png";
import './Profile.css' 
// import ZoomDialog from "components/ZoomDialog/ZoomDialog";
import Login from "scenes/Login/Login";

function Profile(){
  const user = useSelector(state => state.global.user);
  // const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  if (!user) {
    // console.slog("hi")
    return <Login open={open} setOpen={setOpen} />;
  }
  else {
    return (
      <div className="profile">
        <h1>Profile</h1>
        <div className="profiles profile_img">
          <img src={profile} alt="profile" className="profile_pic" />
        </div>
        <div className="profiles profile_detail">
          <h3>jainesh Machhi</h3>
          <p>@red-0510</p>
          <h2>99999999 followers</h2>
          <hr></hr>
          <p>
            jainesh Machhi is the leader of team fantastic 4 currently working
            on project of Adworks
          </p>
        </div>
        <div className="profiles profile_icon">
          <TwitterIcon></TwitterIcon>
          <FacebookIcon></FacebookIcon>
          <InstagramIcon></InstagramIcon>
          <LinkedInIcon></LinkedInIcon>
        </div>
      </div>
    );
  }
}

export default Profile;