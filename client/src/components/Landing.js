import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import OptionsForm from './options/OptionsForm';
import Login from './Login';
import Profile from './Profile';

class Landing extends Component {
	renderContent() {
		console.log('AUTH: ', this.props.auth);
		switch (this.props.auth) {
			case null:
				return;
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

	renderOptions() {
		console.log('OPTIONS: ', this.props.options);
		switch (this.props.options) {
			case null:
				return;
			case true:
				return;
			default:
				return <OptionsForm />;
		}
	}

	render() {
		return (
			<div>
				{this.renderContent()}
				{this.renderOptions()}
			</div>
		);
	}
}

function mapStateToProps({ auth, options }) {
	return { auth, options };
}

export default connect(mapStateToProps, actions)(Landing);
