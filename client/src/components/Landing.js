import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import * as actions from '../actions';
import OptionsForm from './options/OptionsForm';
import Login from './Login';
import Profile from './Profile';

class Landing extends Component {
	onChangeForm({ theme }) {
		this.props.setTheme(theme);
	}

	renderOptions() {
		if (this.props.auth) {
			const {
				options,
				linkedinDisplayName,
				googleDisplayName,
				facebookDisplayName
			} = this.props.auth;
			switch (options.length > 0) {
				case true:
					return (
						<Profile
							name={
								linkedinDisplayName || googleDisplayName || facebookDisplayName
							}
						/>
					);
				default:
					return <OptionsForm onChange={this.onChangeForm.bind(this)} />;
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

function mapStateToProps({ auth, form }) {
	return { auth, theme: form.theme };
}

export default connect(mapStateToProps, actions)(muiThemeable()(Landing));
