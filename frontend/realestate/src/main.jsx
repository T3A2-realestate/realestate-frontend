import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
//UserProvider
import UserProvider from "./utils/userContext";
// PropertyProvider
import PropertyProvider from "./utils/propertyContext";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PropertyProvider>
          <App />
        </PropertyProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
