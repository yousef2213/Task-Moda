import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { TemplateProvider } from "./context/context.js";

ReactDOM.render(
  <Router>
      <TemplateProvider>
        <App />
      </TemplateProvider>
  </Router>,
  document.getElementById("root")
);

