import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';
import { Card } from 'material-ui/Card';
import IconPanel from './common/IconPanel';

class Frontend extends Component {
	render() {
		const { color, textColor } = this.props.muiTheme.appBar;
		return (
			<div className="row">
				<Card className="col s12" style={{ padding: 0 }}>
					<IconPanel iconName="important_devices" />
					<div
						className="col s12 m6"
						style={{ backgroundColor: textColor, minHeight: 500 }}
					>
						List
					</div>
				</Card>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Frontend));
