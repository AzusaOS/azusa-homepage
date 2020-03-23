import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Presentation from "./pages/presentation/presentation";
import News from "./pages/news/news";
import Contact from "./pages/contact/contact";
import Download from "./pages/download/download";
import Home from "./pages/home/home";
import {getPrefix} from "@karpeleslab/klbfw";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

// we use this to pass a given status code to the SSR system
function Status({ code, children }) {
  return (
      <Route
          render={({ staticContext }) => {
            if (staticContext) staticContext.status = code;
            return children;
          }}
      />
  );
}

function Approuter() {
  const { t } = useTranslation();

  return (
    <Router basename={getPrefix()}>
      <title>{t("azusa_title")}</title>
      <meta name="description" content={t("azusa_desc")} />
      <Switch>
        <Route exact path="/coming-soon">
          <Helmet>
          </Helmet>
        </Route>
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
        <Route>
          <Helmet>
            <title>{t("azusa_title")} - Not Found</title>
          </Helmet>
          <Status code={404}>
            <h1>{/*Page not found*/}</h1>
          </Status>
        </Route>
      </Switch>
    </Router>
  );
}
export default Approuter;
