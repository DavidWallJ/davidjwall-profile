import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';

import TechnologiesForm from './ProjectsTechnologiesForm';
import LinkList from './ProjectsLinkList';

class Projects extends Component {
	render() {
		const { color, textColor } = this.props.muiTheme.appBar;
		const altColor = this.props.muiTheme.slider.trackColorSelected;

		return (
			<Card
				className="row"
				style={{
					margin: 0,
					backgroundColor: altColor,
					minHeight: 500,
					paddingTop: 50,
					paddingBottom: 50
				}}
			>
				<div
					className="col s12"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						color: textColor
					}}
				>
					<FontIcon
						style={{
							fontSize: 120,
							color: textColor
						}}
						className="material-icons"
					>
						code
					</FontIcon>
					<h2>Projects</h2>
				</div>

				<div
					className="col s12 l6"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: textColor,
						flexDirection: 'column'
					}}
				>
					<h5>Technologies</h5>
					<TechnologiesForm color={color} textColor={textColor} />
				</div>
				<div
					className="col s12 l6"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: textColor,
						flexDirection: 'column'
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
