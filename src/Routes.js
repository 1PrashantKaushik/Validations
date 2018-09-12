import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./Components/Allcomponents/Signup";
import Login from "./Components/Allcomponents/Login";

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" Component={Login} />
          <Route path="/login" Component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default Router;
