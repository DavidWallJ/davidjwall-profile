import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';
import { Card } from 'material-ui/Card';

// you are here. you're considering using npm install material-ui@next
// material uis own flexbox layout beta version
class Frontend extends Component {
	render() {
		const { color, textColor } = this.props.muiTheme.appBar;
		console.log(this.props.muiTheme);
		return (
			<div className="row">
				<Card className="col s12" style={{ padding: 0 }}>
					<div
						className="col s12 m6"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							minHeight: 500,
							backgroundColor: color
						}}
					>
						<FontIcon
							style={{
								fontSize: 144,
								color: textColor
							}}
							className="material-icons"
						>
							important_devices
						</FontIcon>
					</div>
					<div
						className="col s12 m6"
						style={{ backgroundColor: 'white', minHeight: 500 }}
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
