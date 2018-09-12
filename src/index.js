import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Reducers.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./Styles/Style.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();