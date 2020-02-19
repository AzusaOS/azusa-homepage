import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Route exact path="/">
					<h1>AZUSA</h1>
				</Route>
			</header>
		</div>
	);
}

export default App;
