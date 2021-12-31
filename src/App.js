import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//styles
import "./App.css";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  return (
    <Router basename="/react-portfolio">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
};

export default App;
