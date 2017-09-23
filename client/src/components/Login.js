import React, { Component } from 'react';
import styles from './componentsStyles';
import * as actions from '../actions';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

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
								// label="Linkedin"
								backgroundColor="#0077b5"
								style={styles.loginButtonStyle}
								icon={
									<FontAwesome
										name="linkedin-square"
										size="2x"
										style={{ color: 'white' }}
									/>
								}
							/>
						</a>
						<a href="/auth/facebook">
							<RaisedButton
								// label="Facebook"
								backgroundColor="#0077b5"
								style={styles.loginButtonStyle}
								icon={
									<FontAwesome
										name="facebook-square"
										size="2x"
										style={{ color: 'white' }}
									/>
								}
							/>
						</a>
						<a href="/auth/google">
							<RaisedButton
								// label="Google"
								backgroundColor="#f03530"
								style={styles.loginButtonStyle}
								icon={
									<FontAwesome
										name="google"
										size="2x"
										style={{ color: 'white' }}
									/>
								}
							/>
						</a>
						<RaisedButton
							onClick={this.anonymousHandler.bind(this)}
							// label="Anonymous"
							primary={true}
							style={styles.loginButtonStyle}
							icon={
								<FontAwesome
									name="user-secret"
									size="2x"
									style={{ color: 'white' }}
								/>
							}
						/>
						<p>
							If you prefer to be anonymous, choose the{' '}
							<FontAwesome
								name="user-secret"
								size="1x"
								style={{ color: '#aaa' }}
							/>{' '}
							option.
						</p>
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
