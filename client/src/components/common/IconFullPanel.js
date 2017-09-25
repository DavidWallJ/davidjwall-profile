import styles from '../componentsStyles';

import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';

class IconFullPanel extends Component {
	render() {
		const { iconName, panelTitle, color } = this.props;
		return (
			<div
				className="col s12"
				style={{
					...styles.flexCenterColumn,
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
				<p style={{ fontSize: '3.8em', marginTop: 30, marginBottom: 40 }}>
					{panelTitle}
				</p>
			</div>
		);
	}
}

export default muiThemeable()(IconFullPanel);
