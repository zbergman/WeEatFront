import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./assets/stylesheets/colors.scss";
import { Provider } from "react-redux";
import store from "./store";
import "semantic-ui-css/semantic.min.css";
import { Home } from "./pages/Home";
import dotenv from "dotenv";

dotenv.config({ silent: true });

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
