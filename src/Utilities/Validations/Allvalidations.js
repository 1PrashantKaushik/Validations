import Validator from "is_js";
import { isEmpty } from "lodash";
import { store } from "../../Redux/Reducers";
import { _Signup } from "../../Redux/Types";

export default function validateInput(data, Users) {
  let count = 0;
  let pcount = 0;
  let errors = {};
  let isValid = true;

  if (Validator.empty(data.email)) {
    errors.email = "Email is required";
    isValid = false;
  }

  if (!Validator.empty(data.email) && !Validator.email(data.email)) {
    errors.email = "Invalid email Format";
    isValid = false;
  }

  if (Validator.empty(data.password)) {
    errors.password = "Password is required";
    isValid = false;
  }
  if (isValid) {
    Users.map(user => {
      if (user.email !== data.email) {
        count++;
        if (user.password !== data.password) {
          pcount++;
        }
      }
    });
  }
  if (count === Users.length) {
    errors.email = "Email not Found";
  }
  if (pcount !== 0 && count !== Users.length) {
    errors.password = " Wrong Password ";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export function validateSignupinput(data, Users) {
  let { password, repassword, email } = data;
  let errors = {};
  let isValid = true;

  if (Validator.empty(email)) {
    errors.email = "Email is required";
    isValid = false;
  }

  if (!Validator.empty(email) && !Validator.email(email)) {
    errors.email = "Invalid email Format";
    isValid = false;
  }
  if (Validator.empty(password)) {
    errors.password = "Password is required";
    isValid = false;
  }
  if (Validator.empty(repassword) && password.length) {
    errors.repassword = "Repassword is required";
    isValid = false;
  }
  if (password.length && repassword.length && password !== repassword) {
    errors.repassword = "Password not match";
    isValid = false;
  }
  Users.map(user => {
    if (email === user.email) {
      errors.email = "Email Exist";
      isValid = false;
    }
  });

  if (isValid) {
    store.dispatch({ type: _Signup, payload: data });
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
