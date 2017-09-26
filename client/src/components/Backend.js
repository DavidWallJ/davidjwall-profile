import React, { Component } from 'react';
import styles from './componentsStyles';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card } from 'material-ui/Card';

import IconHalfPanel from './common/IconHalfPanel';
import BackendContentPanel from './BackendContentPanel';

class Backend extends Component {
	contentPanelLeft() {
		if (window.innerWidth > 599) {
			return <BackendContentPanel />;
		} else {
			return null;
		}
	}

	contentPanelRight() {
		if (window.innerWidth < 600) {
			return <BackendContentPanel />;
		} else {
			return null;
		}
	}

	render() {
		return (
			<Card className="row" style={{ ...styles.halfPanelCard }}>
				<div className="col s12" style={{ padding: 0, position: 'relative' }}>
					{this.contentPanelLeft()}
					<IconHalfPanel iconName="dns" panelTitle="Back End" />
					{this.contentPanelRight()}
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Backend));
