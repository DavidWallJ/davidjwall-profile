import React, { Component } from 'react';
import styles from './componentsStyles';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card } from 'material-ui/Card';
import IconHalfPanel from './common/IconHalfPanel';

class WithCare extends Component {
	render() {
		const { textColor } = this.props.muiTheme.appBar;

		return (
			<Card className="row" style={{ ...styles.halfPanelCard }}>
				<div className="col s12" style={{ padding: 0 }}>
					<IconHalfPanel iconName="favorite" panelTitle="With Care" />
					<div
						className="col s12 m6"
						style={{
							...styles.flexCenterColumn,
							...styles.contentContainer,
							backgroundColor: textColor
						}}
					>
						<h5>In addition to all this... </h5>
						<h5 />
						<h5>
							I'm experienced with testing frameworks like Mocha and Chai. The
							integration of which help to ensure that your project not only
							behaves exactly as you would like it to now but also in the
							future. Incorporating such testing frameworks make it easer for
							future developers to make changes to your website or application
							without creating issues that could lead to delays or even
							downtime.
						</h5>
						<h5>
							I also know my way around collaboration and version control
							software like Git and GitHub which allow for efficient and
							reliable individual or team web development.
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
export default connect(mapStateToProps)(muiThemeable()(WithCare));
