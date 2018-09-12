import React, { Component } from "react";
import "./App.css";
import Signup from "./Components/Allcomponents/Signup.js";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Allcomponents/Login";

class App extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Application">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
