import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import App from "./App";

// redux
import { Provider } from "react-redux";
import store from "./redux/configureStore";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
