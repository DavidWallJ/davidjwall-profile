import React, { Component } from 'react';
import styles from './componentsStyles';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card } from 'material-ui/Card';

import IconHalfPanel from './common/IconHalfPanel';

class Frontend extends Component {
	render() {
		const { textColor } = this.props.muiTheme.appBar;
		return (
			<Card className="row" style={{ ...styles.halfPanelCard }}>
				<div
					className="col s12"
					style={{
						padding: 0
					}}
				>
					<IconHalfPanel iconName="important_devices" panelTitle="Front End" />
					<div
						className="col s12 m6"
						style={{
							...styles.flexCenterColumn,
							...styles.contentContainer,
							backgroundColor: textColor
						}}
					>
						<h5>Well it means that...</h5>
						<h5>
							I can design your projects front-end or take your already existing
							design and turn it into responsive code accessible from user's
							mobile devices and desktop computers.
						</h5>
						<h5>
							I can add or incorporate functionality and interactivity to your
							your website or application using JavaScript based libraries such
							as React and jQuery.
						</h5>
						<h5>
							I can incorporate data from RESTful web services and APIs into
							your website or application seamlessly.
						</h5>
					</div>
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Frontend));
