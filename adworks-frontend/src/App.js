import React, { useState, useMemo, useEffect } from "react"
import { BrowserRouter, Routes,Route, Navigate} from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "theme";
import Layout from "scenes/Layout/Layout";
import Home from "components/Home/Home";
import './App.css';

function App() {

  const [mode,setMode] = useState("dark");
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  
  console.log(theme);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout  setMode={setMode} />}>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
