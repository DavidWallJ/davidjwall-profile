import React, { Component } from 'react';
import styles from '../componentsStyles';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';

class iconHalfPanel extends Component {
	render() {
		const { color, textColor } = this.props.muiTheme.appBar;
		const { iconName, panelTitle } = this.props;
		return (
			<div
				className="col s12 m6"
				style={{
					...styles.flexCenterColumn,
					minHeight: 550,
					backgroundColor: color,
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

export default muiThemeable()(iconHalfPanel);
