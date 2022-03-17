/* eslint-disable import/no-unresolved */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import "react-toastify/dist/ReactToastify.min.css";
import "@fontsource/roboto";
import "@fontsource/sansita-swashed";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
