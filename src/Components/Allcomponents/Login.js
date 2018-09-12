import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import validateInput from "../../Utilities/Validations/Allvalidations";
import { connect } from "react-redux";
import { store } from "../../Redux/Reducers";
import { _GiveUser } from "../../Redux/Types";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    user: {
      password: "",
      email: ""
    },
    errors: {},
    isValid: true
  };

  componentWillMount = () => {
    store.dispatch({ type: _GiveUser, payload: {} });
  };

  enterLoginDetail = (key, value) => {
    let { user, errors } = { ...this.state };
    user = { ...user, [key]: value };
    errors = { ...errors, [key]: "" };
    this.setState({ errors, user });
  };

  loginSubmit = () => {
    let { errors, isValid } = {
      ...validateInput(this.state.user, this.props.data.Users)
    };
    if (isValid) {
      localStorage.setItem("Name", this.state.user.email);
      this.props.history.push("/dashboard");
    }
    this.setState({ errors, isValid });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="Application">
        <div className="Loginouter-div">
          <div className="Login">
            <div className="Login-inner">
              <div className="Login-inner-left" />
              <div className="Login-inner-right">
                <div className="inner-div-middle" />
                <div className="Login-block">
                  <div className="Login-block-header">
                    &nbsp; &nbsp;
                    <p
                      style={{
                        marginTop: "7%",
                        color: "#f7c204",
                        fontSize: "10px",
                        display: "inline-block",
                        fontWeight: "bold",
                        letterSpacing: "2px"
                      }}
                    >
                      ALREADY MEMBERS
                    </p>
                    <p
                      style={{
                        display: "inline-block",
                        marginLeft: "9%",
                        fontSize: "10px",
                        color: "#898a8c"
                      }}
                    >
                      {" "}
                      Need Help?
                    </p>
                  </div>
                  <input
                    name="email"
                    className="w3-input w3-border w3-round inputinlogin"
                    placeholder="Enter Email"
                    type="text"
                    onChange={e =>
                      this.enterLoginDetail(e.target.name, e.target.value)
                    }
                  />
                  {errors && (
                    <p
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        marginTop: "0px"
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                  <input
                    name="password"
                    className="w3-input w3-border w3-round inputinlogin"
                    placeholder="Enter Your Password"
                    type="password"
                    onChange={e =>
                      this.enterLoginDetail(e.target.name, e.target.value)
                    }
                  />{" "}
                  {errors && (
                    <p
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        marginTop: "0px"
                      }}
                    >
                      {errors.password}
                    </p>
                  )}
                  <Button className="Loginbutton" onClick={this.loginSubmit}>
                    Sign In
                  </Button>
                </div>

                <div className="Bottom-message">Dont have account yet?</div>
                <Link to="/signup">
                  <div className="Bottom-message1">Create an account</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State Coming is", state);
  return {
    data: state
  };
};
export default connect(mapStateToProps)(Login);
