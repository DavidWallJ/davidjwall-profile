import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';

class iconFullPanel extends Component {
	render() {
		const { iconName, panelTitle, color } = this.props;
		return (
			<div
				className="col s12"
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					color: color
				}}
			>
				<FontIcon
					style={{
						fontSize: 120,
						color: color
					}}
					className="material-icons"
				>
					{iconName}
				</FontIcon>
				<h2>
					{panelTitle}
				</h2>
			</div>
		);
	}
}

export default muiThemeable()(iconFullPanel);
