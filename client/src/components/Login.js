import React, { Component } from 'react';
import styles from './componentsStyles';
import * as actions from '../actions';
import { connect } from 'react-redux';

import { Card, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
	anonymousHandler() {
		this.props.setAnonymous({ auth: false, options: [] });
	}

	render() {
		// const windowHeight = window.innerHeight;
		return (
			<div className="row">
				<Card
					className="col s12 m6 offset-m3 center-align"
					style={styles.loginCardStyle}
				>
					<h2>Welcome</h2>
					<h5>Please login in with...</h5>
					<CardActions>
						<a href="/auth/linkedin">
							<RaisedButton
								label="Linkedin"
								primary={true}
								fullWidth={true}
								style={styles.loginButtonStyle}
							/>
						</a>
						<a href="/auth/facebook">
							<RaisedButton
								label="Facebook"
								primary={true}
								fullWidth={true}
								style={styles.loginButtonStyle}
							/>
						</a>
						<a href="/auth/google">
							<RaisedButton
								label="Google"
								primary={true}
								fullWidth={true}
								style={styles.loginButtonStyle}
							/>
						</a>
						<RaisedButton
							onClick={this.anonymousHandler.bind(this)}
							label="Anonymous"
							primary={true}
							fullWidth={true}
							style={styles.loginButtonStyle}
						/>
					</CardActions>
				</Card>
			</div>
		);
	}
}

function mapStateToProps({ auth, form }) {
	return { auth, form };
}

export default connect(mapStateToProps, actions)(Login);
