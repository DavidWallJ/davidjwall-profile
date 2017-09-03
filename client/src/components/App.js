import React, { Component } from 'react';
import * as actions from '../actions';
import {
	pinkA100,
	pinkA200,
	pinkA400,
	cyan500,
	cyan700,
	grey100,
	grey300,
	grey400,
	grey500,
	grey600,
	darkBlack,
	fullBlack,
	fullWhite,
	white
} from 'material-ui/styles/colors';
import { fade } from 'material-ui//utils/colorManipulator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';

const muiThemeLight = getMuiTheme({
	palette: {
		primary1Color: cyan500,
		primary2Color: cyan700,
		primary3Color: grey400,
		accent1Color: pinkA200,
		accent2Color: grey100,
		accent3Color: grey500,
		textColor: darkBlack,
		alternateTextColor: white,
		canvasColor: white,
		borderColor: grey300,
		disabledColor: fade(darkBlack, 0.3),
		pickerHeaderColor: cyan500,
		clockCircleColor: fade(darkBlack, 0.07),
		shadowColor: fullBlack
	}
});

const muiThemeDark = getMuiTheme({
	palette: {
		primary1Color: cyan700,
		primary2Color: cyan700,
		primary3Color: grey600,
		accent1Color: pinkA200,
		accent2Color: pinkA400,
		accent3Color: pinkA100,
		textColor: fullWhite,
		secondaryTextColor: fade(fullWhite, 0.7),
		alternateTextColor: '#303030',
		canvasColor: '#303030',
		borderColor: fade(fullWhite, 0.3),
		disabledColor: fade(fullWhite, 0.3),
		pickerHeaderColor: fade(fullWhite, 0.3),
		clockCircleColor: fade(fullWhite, 0.12)
	}
});

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		const theme =
			this.props.currentTheme.theme === 'darkTheme'
				? muiThemeDark
				: muiThemeLight;
		return (
			<MuiThemeProvider muiTheme={theme}>
				<BrowserRouter>
					<div>
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
