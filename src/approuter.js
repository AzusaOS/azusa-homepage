import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Presentation from "./pages/presentation/presentation";
import News from "./pages/news/news";
import Contact from "./pages/contact/contact";
import Download from "./pages/download/download";
import Home from "./pages/home/home";

function Approuter() {
  return (
    <Router>
      <Switch>
        <Route path="/presentation">
          <Presentation />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/download">
          <Download />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default Approuter;
