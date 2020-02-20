import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function App() {
	const { t } = useTranslation();

	return (
		<div className="App">
			<header className="App-header">
				<Route exact path="/">
					<Helmet>
						<meta charSet="utf-8" />
						<title>{t("azusa_title")}</title>
						<meta name="description" content={t("azusa_desc")} />
					</Helmet>
					<h1>AZUSA</h1>
				</Route>
			</header>
		</div>
	);
}

export default App;
