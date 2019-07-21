import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
// import { muiThemeLight, muiThemeDark } from './themes';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		// const theme =
		// 	this.props.currentTheme.theme === 'darkTheme'
		// 		? muiThemeDark
		// 		: muiThemeLight;
		return (
			<MuiThemeProvider>
				<BrowserRouter>
					<div className="theme-light">
						<Route exact path="/" component={Landing} />
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps({ form, currentTheme, auth }) {
	return { form, currentTheme, auth };
}
export default connect(mapStateToProps, actions)(App);
