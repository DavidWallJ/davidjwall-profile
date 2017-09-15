import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import FontAwesome from 'react-fontawesome';

class Contact extends Component {
	render() {
		const { color, textColor } = this.props.muiTheme.appBar;
		const altColor = this.props.muiTheme.slider.trackColorSelected;
		return (
			<Card
				className="row"
				style={{
					margin: 0,
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
						face
					</FontIcon>
					<h2>Contact</h2>
					<p>
						Thank you for your time NAME. I hope you've enjoyed viewing my
						profile and listening to the GENRE music
					</p>
					<p>
						Feel free to contact me by any of the methods listed below. Let's
						build something together!
					</p>
				</div>
				<div className="row">
					<div className="col s12 m4 center-align">
						<a href="mailto:davidjwall@protonmail.com">
							<FontIcon
								style={{
									fontSize: 70,
									color: color
								}}
								className="material-icons"
							>
								email
							</FontIcon>
							<p style={{ color: color }}>davidjwall@protonmail.com</p>
						</a>
					</div>
					<div className="col s12 m4 center-align">
						<a href="tel:+886975667693">
							<FontIcon
								style={{
									fontSize: 70,
									color: color
								}}
								className="material-icons"
							>
								call
							</FontIcon>
							<p style={{ color: color }}>+886 975667693</p>
						</a>
					</div>
					<div className="col s12 m4 center-align">
						<a href="https://www.linkedin.com/in/david-j-wall" target="_blank">
							<FontAwesome
								name="linkedin-square"
								size="5x"
								style={{ color: color, paddingBottom: 6, paddingTop: 2 }}
							/>
							<p style={{ color: color }}>David J Wall</p>
						</a>
					</div>
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Contact));
