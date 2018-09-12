import { createStore } from "redux";
import { signUpuser } from "./Actions";
export let initialstate = {
  Users: [
    { email: "prashant@gmail.com", password: "12345" },
    { email: "munish@gmail.com", password: "12345" }
  ]
};

export const maintainState = (state = initialstate, action) => {
  switch (action.type) {
    case "giveusers": {
      return state;
    }
    case "signupuser": {
      return signUpuser(state, action);
    }
    default: {
      console.log("Default Case Running");
    }
  }
};

export const store = createStore(maintainState);

store.subscribe(() => {
  console.log("Initial State is:", store.getState());
});
