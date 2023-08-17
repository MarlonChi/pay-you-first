import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ThemeProvider } from "styled-components";
import { definitions } from "./styles/Theme/definitions.jsx";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={definitions}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
