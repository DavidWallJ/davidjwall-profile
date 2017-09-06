import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';

class iconPanel extends Component {
	render() {
		const { color, textColor } = this.props.muiTheme.appBar;
		const { iconName, panelTitle } = this.props;
		return (
			<div
				className="col s12 m6"
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: 500,
					backgroundColor: color,
					flexDirection: 'column',
					color: textColor
				}}
			>
				<FontIcon
					style={{
						fontSize: 144,
						color: textColor
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

export default muiThemeable()(iconPanel);
