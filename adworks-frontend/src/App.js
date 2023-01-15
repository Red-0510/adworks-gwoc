import React, { useState, useMemo, useEffect } from "react"
import { BrowserRouter, Routes,Route, Navigate} from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "theme";
import Layout from "scenes/Layout/Layout";
import Home from "components/Home/Home";
import './App.css';
import Services from "./scenes/Services/Services.jsx"

function App() {

  const [mode,setMode] = useState("dark");
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout  setMode={setMode} />}>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/our-work" element={<Home />}/>
              <Route path="/pricing" element={<Home />}/>
              <Route path="/our-team" element={<Home />}/>
              <Route path="/contact" element={<Home />}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
