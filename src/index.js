import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./authContext/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <h1>Helloo</h1>
      {/* <App /> */}
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
