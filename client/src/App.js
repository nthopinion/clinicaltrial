import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./pages/Home";
import { Enroll } from "./pages/Enroll";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/enroll" component={Enroll}></Route>
        <Route exact path="/" component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
