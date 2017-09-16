import React, { Component } from 'react';
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
			<Card className="row" style={{ margin: 0 }}>
				<div className="col s12" style={{ padding: 0 }}>
					<IconHalfPanel iconName="favorite" panelTitle="With Care" />
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
export default connect(mapStateToProps)(muiThemeable()(WithCare));
