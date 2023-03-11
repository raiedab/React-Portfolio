import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import About from "./pages/about";

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