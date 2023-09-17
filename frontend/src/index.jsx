// main.js or index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// redux
import { Provider } from "react-redux";
import store from './redux/configureStore';


const container = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
