import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//styles
import "./App.css";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Router>
  );
}

export default App;
