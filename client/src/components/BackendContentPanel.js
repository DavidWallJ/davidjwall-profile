import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

class backendContentPanel extends Component {
	render() {
		const { textColor } = this.props.muiTheme.appBar;
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

export default muiThemeable()(backendContentPanel);
