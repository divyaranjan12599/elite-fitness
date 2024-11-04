import React, { createContext, useContext, useEffect, useState } from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import OurTeam from "./pages/ourTeam";
import OurBlog from "./pages/ourBlog";

function App() {


  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ourTeam" element={<OurTeam />} />
            <Route path="/ourBlog" element={<OurBlog />} />
        </Routes>
      </Router>
  );
}

export default App;
