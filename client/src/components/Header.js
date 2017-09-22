import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

class Header extends Component {
	render() {
		const iconFields = [
			{ icon: 'important_devices', component: 'frontend' },
			{ icon: 'dns', component: 'backend' },
			{ icon: 'favorite', component: 'withCare' },
			{ icon: 'code', component: 'projects' },
			{ icon: 'school', component: 'education' },
			{ icon: 'face', component: 'contact' }
		];

		const rightIcons = (
			<div style={{ marginTop: 0 }}>
				{iconFields.map((icon, i) => {
					return (
						<IconButton key={i}>
							<FontIcon
								color={this.props.muiTheme.palette.alternateTextColor}
								hoverColor="#ff80ab"
								className="material-icons"
								onClick={() => this.props.scrollCallback(icon.component)}
							>
								{icon.icon}
							</FontIcon>
						</IconButton>
					);
				})}
			</div>
		);
		return <AppBar showMenuIconButton={false} iconElementRight={rightIcons} />;
	}
}

export default muiThemeable()(Header);
