import React from "react";
import { Router, Route } from "react-router-dom";

//styles
import "./App.css";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio"

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="#about" component={About} />
      <Route exact path="#portfolio" component={Portfolio} />
    </Router>
  );
}

export default App;
