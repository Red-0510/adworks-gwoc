import React, { useState, useMemo, useEffect } from "react"
import { BrowserRouter, Routes,Route, Navigate} from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "theme";
//redux
import {useSelector,useDispatch} from "react-redux";
import Layout from "scenes/Layout/Layout";
import Login from "scenes/Login/Login";
import Home from "components/Home/Home";
import Contact from "scenes/Contact/Contact";
import './App.css';
import Services from "scenes/Services/Services";
 

function App() {

  const mode = useSelector((state)=>state.global.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/our-work" element={<Home />}/>
              <Route path="/pricing" element={<Home />}/>
              <Route path="/our-team" element={<Home />}/>
              <Route path="/contact" element={<Contact />}/>
            </Route>
            <Route path="/login" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
