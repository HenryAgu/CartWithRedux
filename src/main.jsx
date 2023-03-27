import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Redux store
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import itemReducers from "./features/CartItems"

const store = configureStore({
  reducer:{
    items: itemReducers,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
