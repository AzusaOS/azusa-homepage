import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Helmet } from "react-helmet";
import * as serviceWorker from './serviceWorker';
import { renderToString } from 'react-dom/server';
import { BrowserRouter, StaticRouter } from "react-router-dom";
import { getPrefix, getUuid, getUrl } from "@karpeleslab/klbfw";

if(typeof window !== 'undefined') {
	// in browser
	ReactDOM.render(<BrowserRouter basename={getPrefix()}><App /></BrowserRouter>, document.getElementById('root'));

	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
}

global._renderToString = (cbk) => {
	let result = { uuid: getUuid() };

	try {
		let context = {};

		result.app = renderToString(
			<StaticRouter context={context} basename={getPrefix()} location={getUrl().full}>
				<App />
			</StaticRouter>
		);

		// grab helmet
		Helmet.canUseDOM = false;
		const helmet = Helmet.renderStatic();

		result.title = helmet.title ? helmet.title.toString() : null;
		result.meta = helmet.meta ? helmet.meta.toString() : null;
		result.script = helmet.script ? helmet.script.toString() : null;
		result.link = helmet.link ? helmet.link.toString() : null;
		result.bodyAttributes = helmet.bodyAttributes ? helmet.bodyAttributes.toString() : null;
		result.htmlAttributes = helmet.htmlAttributes ? helmet.htmlAttributes.toString() : null;

		cbk(result);
	} catch(e) {
		result.error = e;
		cbk(result);
	}
};
