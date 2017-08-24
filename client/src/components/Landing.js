import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import OptionsForm from './options/OptionsForm';
import Login from './Login';
import Profile from './Profile';

class Landing extends Component {
	renderOptions() {
		if (this.props.auth) {
			switch (this.props.auth.options.length > 0) {
				case true:
					return (
						<Profile
							name={
								this.props.auth.linkedinDisplayName ||
								this.props.auth.googleDisplayName ||
								this.props.auth.facebookDisplayName
							}
						/>
					);
				default:
					return <OptionsForm />;
			}
		}

		return <Login />;
	}

	render() {
		return (
			<div>
				{this.renderOptions()}
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(Landing);
