import styles from '../componentsStyles';

import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';

class IconHalfPanel extends Component {
	render() {
		const { color, textColor } = this.props.muiTheme.appBar;
		const { iconName, panelTitle } = this.props;
		return (
			<div
				className="col s12 m6"
				style={{
					...styles.flexCenterColumn,
					backgroundColor: color,
					color: textColor,
					minHeight: 600,
					height: '100%'
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
				<p style={{ fontSize: '2.7em' }}>
					{panelTitle}
				</p>
			</div>
		);
	}
}

export default muiThemeable()(IconHalfPanel);
