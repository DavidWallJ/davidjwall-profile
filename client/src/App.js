import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React Bitches</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<ul>
					<li>
						<a href="/auth/google">Sign in With Google</a>
					</li>
					<li>
						<a href="/auth/facebook">Sign in With Facebook</a>
					</li>
					<li>
						<a href="/auth/linkedin">Sign in With Linkedin</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default App;
