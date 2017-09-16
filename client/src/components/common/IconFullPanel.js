import styles from '../componentsStyles';

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
				<h2 style={{ paddingBottom: 25 }}>
					{panelTitle}
				</h2>
			</div>
		);
	}
}

export default muiThemeable()(iconFullPanel);
