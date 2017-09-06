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
			<Card className="row" style={{ margin: 0 }}>
				<div className="col s12" style={{ padding: 0 }}>
					<IconPanel iconName="important_devices" panelTitle="Frontend" />
					<div
						className="col s12 m6"
						style={{ backgroundColor: textColor, minHeight: 500 }}
					>
						List
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
