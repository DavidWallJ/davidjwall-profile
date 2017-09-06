import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';

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
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Contact));
