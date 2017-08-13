import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Profile from './Profile';

class Landing extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'Loading...';
			case false:
				return <Login />;
			default:
				return (
					<Profile
						name={
							this.props.auth.linkedinDisplayName ||
							this.props.auth.googleDisplayName ||
							this.props.auth.facebookDisplayName
						}
					/>
				);
		}
	}

	render() {
		console.log('Props: ', this.props);
		return (
			<div>
				{this.renderContent()}
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Landing);
