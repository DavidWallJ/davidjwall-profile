import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card } from 'material-ui/Card';
import IconPanel from './common/IconPanel';

// okay soluition to cleaning this up is a HOC
// wrap a component in a Component
// https://stackoverflow.com/questions/20851533/react-js-wrapping-one-component-into-another
class Backend extends Component {
	contentPanelLeft() {
		const { textColor } = this.props.muiTheme.appBar;
		if (window.innerWidth > 600) {
			return (
				<div
					className="col s12 m6"
					style={{ backgroundColor: textColor, minHeight: 500 }}
				>
					List
				</div>
			);
		}
	}
	contentPanelRight() {
		const { textColor } = this.props.muiTheme.appBar;
		if (window.innerWidth < 599) {
			return (
				<div
					className="col s12 m6"
					style={{ backgroundColor: textColor, minHeight: 500 }}
				/>
			);
		}
	}

	render() {
		const { color, textColor } = this.props.muiTheme.appBar;
		return (
			<div className="row">
				<Card className="col s12" style={{ padding: 0 }}>
					{this.contentPanelLeft()}
					<IconPanel iconName="dns" />
					{this.contentPanelRight()}
				</Card>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Backend));
