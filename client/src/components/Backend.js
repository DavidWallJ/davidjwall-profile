import React, { Component } from 'react';
import { connect } from 'react-redux';

class Backend extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h3>
					Hello {this.props.name}
				</h3>
				<h5>Welcome to my Welcome Page</h5>
				<a href="/api/logout">( Logout )</a>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(Backend);
