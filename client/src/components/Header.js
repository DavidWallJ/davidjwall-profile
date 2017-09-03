import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
	render() {
		const iconStyles = {
			marginTop: 11,
			marginRight: 24,
			color: this.props.muiTheme.palette.alternateTextColor
		};

		const iconFields = [
			{ icon: 'important_devices', component: 'frontend' },
			{ icon: 'dns', component: 'backend' },
			{ icon: 'favorite', component: 'withCare' },
			{ icon: 'code', component: 'projects' },
			{ icon: 'face', component: 'contact' }
		];

		const rightIcons = (
			<div>
				{iconFields.map((icon, i) => {
					return (
						<a href="#" key={i}>
							<FontIcon
								className="material-icons"
								style={iconStyles}
								onClick={() => this.props.scrollCallback(icon.component)}
							>
								{icon.icon}
							</FontIcon>
						</a>
					);
				})}
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
