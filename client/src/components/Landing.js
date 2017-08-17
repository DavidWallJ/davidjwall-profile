import React, { Component } from 'react';
import { connect } from 'react-redux';
import OptionsForm from './options/OptionsForm';
import Login from './Login';
import Profile from './Profile';

class Landing extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return <Login />;
			default:
				if (this.props.optimized) {
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

				return <OptionsForm />;
		}
	}

	render() {
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
