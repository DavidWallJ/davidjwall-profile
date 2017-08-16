// you're here trying to get mulitheme working via Material UI
import './Header.css';
import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		const iconStyles = {
			marginTop: 11,
			marginRight: 24,
			color: this.props.muiTheme.palette.alternateTextColor
		};
		const rightIcons = (
			<div>
				<a href="#">
					<FontIcon className="material-icons" style={iconStyles}>
						important_devices
					</FontIcon>
				</a>
				<a href="#">
					<FontIcon className="material-icons" style={iconStyles}>
						dns
					</FontIcon>
				</a>
				<a href="#">
					<FontIcon className="material-icons" style={iconStyles}>
						favorite
					</FontIcon>
				</a>
				<a href="#">
					<FontIcon className="material-icons" style={iconStyles}>
						face
					</FontIcon>
				</a>
			</div>
		);
		return (
			<AppBar
				showMenuIconButton={false}
				title="David J. Wall"
				iconElementRight={rightIcons}
			/>
		);
	}
}

export default muiThemeable()(Header);
