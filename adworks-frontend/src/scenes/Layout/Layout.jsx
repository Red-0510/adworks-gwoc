import React, {  useState } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import Footer from "components/Footer/Footer";
import "./Layout.css";
// import { useTheme } from "@emotion/react";
const Layout = (props) => {
  const isMobile = useMediaQuery("(max-width:1050px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const theme = useTheme();
  return (
    <div className="layout" >
      <div className="layout_body">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
        <Footer />
      </div>
      {isMobile && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
    </div>
  );
};

export default Layout;
