import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
// import Options from './Options';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						{/* <Route path="/options" component={Options} /> */}
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		);
	}
}

export default connect(null, actions)(App);
