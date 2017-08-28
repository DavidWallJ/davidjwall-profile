import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Profile extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h5>Welcome to my Profile Page</h5>
				<h3>
					Hello {this.props.name}
				</h3>
				<a href="/api/logout">( Logout )</a>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps, actions)(Profile);
