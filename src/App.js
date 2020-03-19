import React from "react";
import "./App.css";
import "./pages/home/home.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Approuter from "./approuter";

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

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header>
        <Switch>
          <Route exact path="/coming-soon">
            <Helmet>
              <title>{t("azusa_title")}</title>
              <meta name="description" content={t("azusa_desc")} />
            </Helmet>
          </Route>
          <Route exact path="/">
            <Redirect to="/coming-soon" />
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
      </header>
      <Approuter />
    </div>
  );
}

export default App;
