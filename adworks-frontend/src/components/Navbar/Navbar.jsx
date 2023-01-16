import React from 'react'
import { Typography,Button,useTheme,IconButton } from '@mui/material'
import {Menu,
  DarkModeOutlined,
  LightModeOutlined,
  SettingsOutlined,
  ImagesearchRoller
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
// redux
import { setMode } from "state/store";

import "./Navbar.css";
import MyButton from 'components/MyButton/MyButton';

import logo from "assets/images/logo192.png";
import profile from "assets/images/profile.png";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const user = useSelector((state) => state.global.user);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:800px)");
  const navigate = useNavigate();
  const [active, setActive] = useState(null);
  return (
    <div className="navbar">
      {isMobile && (
        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <MenuIcon sx={{ fontSize: "32px" }} />
        </IconButton>
      )}
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          m: "0.5rem 0",
          // gap: "1rem",
        }}
      >
        <img src={logo} className="logo" alt="Logo" />
        <h4>AdWorks</h4>
      </Button>
      {!isMobile && (
        <div className="nav_tabs">
          {menuList.map(({ text, icon }) => {
            const textLower = _.kebabCase(text);
            return (
                <Button key={text}
                  onClick={() => {
                    navigate(`/${textLower}`);
                    setActive(textLower);
                  }}
                  sx={{
                    backgroundColor: "transparent",
                    color:"white",
                    boxShadow:
                      active === textLower
                        ? `180px 0 90px -60px inset ${theme.palette.ternary.main} `
                        : "none",
                    marginLeft:"10px",
                  }}
                >
                {icon}
                <Typography
                    key={text}
                    sx={{
                      fontWeight: textLower === active ? "bold" : "400",
                    }}
                  >
                    {text}
                  </Typography>
                </Button>
            );
          })}
        </div>
      )}
      <div className="info">
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined sx={{ fontSize: "32px" }} />
          ) : (
            <LightModeOutlined sx={{ fontSize: "32px" }} />
          )}
        </IconButton>
        <IconButton>
          <img src={profile} className="logo" />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
