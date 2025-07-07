import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Navbar from "./Navbar";
import './App.css'
import Getapi from "./Getapi";

function Theme() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/getapi" element={<Getapi />} />
        <Route path="/getapi/:id" element={<Getapi />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Theme />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
