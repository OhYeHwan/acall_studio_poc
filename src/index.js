import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { user } from "./data.js";

export const UserContext = createContext();

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={{ user }}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
