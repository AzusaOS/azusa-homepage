import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { BrowserRouter, StaticRouter } from "react-router-dom";
import { getPrefix, getUuid, getUrl } from "@karpeleslab/klbfw";

export function makeRenderer(app) {
	return function(cbk) {
		let result = { uuid: getUuid() };

		try {
			let context = {};

			result.app = renderToString(
				<StaticRouter context={context} basename={getPrefix()} location={getUrl().full}>
					{app}
				</StaticRouter>
			);

			if (context.status)
				result.statusCode = context.status;

			if (context.url) {
				result.redirect = context.url;
				cbk(result);
				return;
			}

			// grab helmet if available
			try {
				const Helmet = require("react-helmet").Helmet;
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
				// ignore
			}
		} catch(e) {
			result.error = e;
			cbk(result);
		}
	};
};

export function run(app) {
	global._renderToString = makeRenderer(app);

	if (typeof window !== 'undefined') {
		ReactDOM.render(<BrowserRouter basename={getPrefix()}>{app}</BrowserRouter>, document.getElementById('root'));
	}
}
