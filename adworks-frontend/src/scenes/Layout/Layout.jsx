import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import Footer from "components/Footer/Footer";
import "./Layout.css";
const Layout = (props) => {

  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  return (
    <div className='layout'>
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className='layout_body'>
        <Navbar 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout