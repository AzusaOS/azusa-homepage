import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Router>
					<Route exact path="/">
						<h1>AZUSA</h1>
					</Route>
				</Router>
			</header>
		</div>
	);
}

export default App;
