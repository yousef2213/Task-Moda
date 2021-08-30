import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home.js";
import Icons from "./components/Icons.js";


function App() {
    return (
      <React.Fragment>
        <Icons />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    )
}

export default App;
