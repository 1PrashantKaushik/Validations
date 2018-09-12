import React, { Component } from "react";
import "./App.css";
import Signup from "./Components/Allcomponents/Signup.js";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Allcomponents/Login";
import Dashboard from "./Components/Allcomponents/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="Main">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
