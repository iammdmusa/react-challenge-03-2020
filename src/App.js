import React from "react";
// import route stuff
import { Switch, Route } from "react-router-dom";
// import Navigation component
import Navigation from "./components/Navigation";
// import HomePage component
import HomePage from "./pages/HomePage";
// import ModelerPage component
import ModelerPage from "./pages/ModelerPage";

import FrameworksPage from "./pages/FrameworksPage";

import "./styles/index.css";

export default () => (
  <div className="wrapper">
    <Navigation />
    <div className="content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/modeler" component={ModelerPage} />
        <Route exact path="/frameworks" component={FrameworksPage} />
      </Switch>
    </div>
  </div>
);
