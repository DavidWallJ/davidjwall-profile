import React, { Component } from 'react';
import styles from './componentsStyles';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card } from 'material-ui/Card';
import IconHalfPanel from './common/IconHalfPanel';

// you are here. you're considering using npm install material-ui@next
// material uis own flexbox layout beta version
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
							behaves exactly as you would like it to now but also in the future
							when it's time for your website or application to grow.
						</h5>
						<h5>
							I know my way around collaboration software like GitHub. Which
							allows for efficient, reliable and seamless individual or team web
							development.
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
