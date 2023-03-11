import React, { useState, useEffect } from "react";
import Home from "./components/home/home";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import Footer from "./components/footer";
import About from "./components/about/about";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;