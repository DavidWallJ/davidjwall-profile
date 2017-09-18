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
				<div className="col s12" style={{ padding: 0 }}>
					<IconHalfPanel iconName="important_devices" panelTitle="Front End" />
					<div
						className="col s12 m6"
						style={{ backgroundColor: textColor, minHeight: 500 }}
					>
						<p>
							I can design your front-end or take your already existing design
							and turn it into responsive code that people will be able to
							access from their mobile devices and desktop computers.
						</p>
						<p>
							I can add or incorporate functionality and interactivity into your
							your website or application using JavaScript based libraries such
							as React and jQuery.
						</p>
						<p>
							I'm expereinced with RESTful web services and API and can
							incorporate the data they return into your website or application.
						</p>
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
