import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { validateSignupinput } from "../../Utilities/Validations/Allvalidations";
import { store } from "../../Redux/Reducers";
import { _GiveUser } from "../../Redux/Types";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    user: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      phone: ""
    },
    errors: {},
    isValid: true
  };

  componentWillMount = () => {
    store.dispatch({ type: _GiveUser, payload: {} });
  };

  enterSignupData = (key, value) => {
    let { user, errors } = this.state;
    user = { ...user, [key]: value };
    errors = { ...errors, [key]: "" };
    this.setState({ user, errors });
  };

  signupSubmit = () => {
    let { errors, isValid } = {
      ...validateSignupinput(this.state.user, this.props.data.Users)
    };
    if (isValid) {
      this.props.history.push("/");
    }
    this.setState({ errors, isValid });
  };
  render() {
    let { errors } = this.state;
    return (
      <div className="Loginouter-div">
        <div className="Login">
          <div className="Login-inner">
            <div className="Login-inner-left" />
            <div className="Login-inner-right">
              <div className="inner-div-middle" />

              <div className="Signup-block">
                <div style={{ height: "0.5px" }} />
                <form onSubmit={this.signupSubmit}>
                  {" "}
                  <input
                    name="name"
                    className="w3-input w3-border w3-round inputinlogin"
                    placeholder="Name"
                    type="text"
                    onChange={e =>
                      this.enterSignupData(e.target.name, e.target.value)
                    }
                    required
                  />
                  <input
                    name="email"
                    className="w3-input w3-border w3-round inputinlogin"
                    placeholder="Email"
                    type="email"
                    onChange={e =>
                      this.enterSignupData(e.target.name, e.target.value)
                    }
                  />
                  {errors && (
                    <p
                      style={{
                        color: "red",
                        lineHeight: "0px",
                        marginLeft: "10px"
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                  <input
                    name="password"
                    className="w3-input w3-border w3-round inputinlogin"
                    placeholder="Password"
                    type="password"
                    onChange={e =>
                      this.enterSignupData(e.target.name, e.target.value)
                    }
                  />
                  {errors && (
                    <p
                      style={{
                        color: "red",
                        lineHeight: "0px",
                        marginLeft: "10px"
                      }}
                    >
                      {errors.password}
                    </p>
                  )}
                  <input
                    name="repassword"
                    className="w3-input w3-border w3-round inputinlogin"
                    placeholder="Re-enter Password"
                    type="password"
                    onChange={e =>
                      this.enterSignupData(e.target.name, e.target.value)
                    }
                  />
                  {errors && (
                    <p
                      style={{
                        color: "red",
                        lineHeight: "0px",
                        marginLeft: "10px"
                      }}
                    >
                      {errors.repassword}
                    </p>
                  )}
                  <input
                    name="phone"
                    className="w3-input w3-border w3-round inputinlogin"
                    placeholder="Phone"
                    type="text"
                    onChange={e =>
                      this.enterSignupData(e.target.name, e.target.value)
                    }
                  />{" "}
                </form>

                <Button className="Loginbutton" onClick={this.signupSubmit}>
                  Register
                </Button>
              </div>
              <Link to="/">
                <div className="Bottom-message" style={{ marginLeft: "17%" }}>
                  Already have account
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Login);
