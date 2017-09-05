import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';
import { Card } from 'material-ui/Card';
import IconPanel from './common/IconPanel';

// you are here. you're considering using npm install material-ui@next
// material uis own flexbox layout beta version
class WithCare extends Component {
	render() {
		const { color, textColor } = this.props.muiTheme.appBar;
		return (
			<div className="row">
				<Card className="col s12" style={{ padding: 0 }}>
					<IconPanel iconName="favorite" />
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
export default connect(mapStateToProps)(muiThemeable()(WithCare));
