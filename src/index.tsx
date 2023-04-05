import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import App from "./App";
import {  HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createReduxStore } from "./Redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={createReduxStore()}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
