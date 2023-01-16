import React, { useState } from "react";
import {
  Typography,
  Button,
  useTheme,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import {
  Menu as MenuIcon,
  DarkModeOutlined,
  LightModeOutlined,
  ArrowDropDownRounded,
  ArrowDropUpRounded,
  PersonAdd,
  Settings,
  Logout,
  AccountCircleOutlined,
  DashboardOutlined,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
// redux
import { setMode } from "state/store";

import "./Navbar.css";
import MyButton from "components/MyButton/MyButton";
import { menuList } from "components/Sidebar/Sidebar";
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
        {user && (
          <div>
            <IconButton
              onClick={(e) => {
                console.log(e.currentTarget);
                if (open) setAnchorEl(null);
                else setAnchorEl(e.currentTarget);
              }}
            >
              <Avatar src={user.profile} />
              {open ? <ArrowDropUpRounded /> : <ArrowDropDownRounded />}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={(e) => setAnchorEl(null)}
              onClick={(e) => setAnchorEl(null)}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <AccountCircleOutlined /> Profile
              </MenuItem>
              <MenuItem>
                <DashboardOutlined /> Dashboard
              </MenuItem>
              <Divider />
              <MenuItem>
                <Settings fontSize="small" />
                Settings
              </MenuItem>
              <MenuItem>
                <Logout fontSize="small" />
                Logout
              </MenuItem>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
