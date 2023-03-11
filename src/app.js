import React, { useState, useEffect } from "react";
import Home from "./components/home/home";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import Footer from "./components/footer";
import About from "./components/about/about";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;