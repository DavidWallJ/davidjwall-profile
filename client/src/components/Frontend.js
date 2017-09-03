import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';
import { Card } from 'material-ui/Card';

// you are here. you're considering using npm install material-ui@next
// material uis own flexbox layout beta version
class Frontend extends Component {
	render() {
		console.log(this.props.muiTheme);
		return (
			<div className="row center-xs middle-xs" style={{ height: '100vh' }}>
				<Card className="col s12">
					<div className="col s6 center-align">
						<FontIcon style={{ fontSize: 96 }} className="material-icons">
							important_devices
						</FontIcon>
					</div>
					<div
						className="col s6"
						style={{ backgroundColor: 'white', height: '100vh' }}
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
