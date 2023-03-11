import React, { useState, useEffect } from "react";
import Home from "./components/home/home";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import footer from "./components/footer";
import About from "./components/about/about";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;