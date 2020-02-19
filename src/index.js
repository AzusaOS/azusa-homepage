import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, StaticRouter } from "react-router-dom";
import { getPrefix, getUuid } from "@karpeleslab/klbfw";

if(typeof window !== 'undefined') {
	// in browser
	ReactDOM.render(<BrowserRouter basename={getPrefix()}><App /></BrowserRouter>, document.getElementById('root'));
}

global._renderToString = () => {
	let result = { uuid: getUuid() };

	try {
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
