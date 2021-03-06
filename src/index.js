import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { run } from "@karpeleslab/react-klbfw-hooks";
import { i18nPromise } from "./i18n";

run(<App/>, [i18nPromise]);

if(typeof window !== 'undefined') {
	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
}
