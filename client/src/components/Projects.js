import React, { Component } from 'react';
import styles from './componentsStyles';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';

import TechnologiesForm from './ProjectsTechnologiesForm';
import LinkList from './ProjectsLinkList';
import IconFullPanel from './common/IconFullPanel';

class Projects extends Component {
	render() {
		const { color, textColor } = this.props.muiTheme.appBar;
		const altColor = this.props.muiTheme.slider.trackColorSelected;

		return (
			<Card
				className="row"
				style={{
					...styles.fullPanelCard,
					backgroundColor: altColor
				}}
			>
				<IconFullPanel
					iconName="code"
					panelTitle="Projects"
					color={textColor}
				/>

				<div
					className="col s12 l6"
					style={{
						...styles.flexCenterColumn,
						color: textColor
					}}
				>
					<h5>Technologies</h5>
					<TechnologiesForm color={color} textColor={textColor} />
				</div>
				<div
					className="col s12 l6"
					style={{
						...styles.flexCenterColumn,
						color: textColor
					}}
				>
					<h5>Links</h5>
					<LinkList color={color} textColor={textColor} />
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Projects));
