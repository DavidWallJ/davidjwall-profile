import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';

class Projects extends Component {
	render() {
		const { color, textColor } = this.props.muiTheme.appBar;
		const altColor = this.props.muiTheme.slider.trackColorSelected;

		const projects = [
			{
				name: 'projecta',
				technologies: ['a', 'b', 'f'],
				link: 'www.example.com'
			},
			{
				name: 'projectb',
				technologies: ['c', 'd', 'e'],
				link: 'www.example.com'
			},
			{
				name: 'projectc',
				technologies: ['a', 'b', 'c', 'd', 'e'],
				link: 'www.example.com'
			}
		];

		// you are here
		// you can figure this out

		// const winners = projects.filter(project => {
		// 	// return project.technologies.indexOf('a') > -1;
		// 	const checkFor = ['a', 'b'];
		// 	const checkIn = project.technologies;
		// 	checkIn.every(val => checkFor.includes(val));
		// });

		console.log('winners: ', winners);
		return (
			<Card
				className="row"
				style={{
					margin: 0,
					backgroundColor: altColor,
					minHeight: 500,
					paddingTop: 52
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
					className="col s12 m6"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: textColor
					}}
				>
					<h5>Technologies</h5>
				</div>
				<div
					className="col s12 m6"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: textColor
					}}
				>
					<h5>Links</h5>
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Projects));
