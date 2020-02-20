import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function App() {
	const { t } = useTranslation();

	return (
		<div className="App">
			<header className="App-header">
				<Switch>
					<Route exact path="/coming-soon">
						<Helmet>
							<title>{t("azusa_title")}</title>
							<meta name="description" content={t("azusa_desc")} />
						</Helmet>
						<h1>AZUSA</h1>
					</Route>
					<Route exact path="/">
						<Redirect to="/coming-soon" />
					</Route>
					<Route status="404">
						<Helmet>
							<title>{t("azusa_title")} - Not Found</title>
						</Helmet>
						<h1>Page not found</h1>
					</Route>
				</Switch>
			</header>
		</div>
	);
}

export default App;
