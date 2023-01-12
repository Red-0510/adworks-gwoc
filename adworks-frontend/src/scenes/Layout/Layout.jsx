import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import "./Layout.css";
const Layout = () => {

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
      </div>
    </div>
  )
}

export default Layout