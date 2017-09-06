import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card } from 'material-ui/Card';
import IconPanel from './common/IconPanel';
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
			<Card className="row" style={{ margin: 0 }}>
				<div className="col s12" style={{ padding: 0 }}>
					{this.contentPanelLeft()}
					<IconPanel iconName="dns" panelTitle="Backend" />
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
