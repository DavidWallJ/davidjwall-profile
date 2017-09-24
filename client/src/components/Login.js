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
		const loginOptionFields = [
			{
				href: '/auth/linkedin',
				backgroundColor: '#4267b2',
				fontAwesomeIconName: 'linkedin-square'
			},
			{
				href: '/auth/facebook',
				backgroundColor: '#0077b5',
				fontAwesomeIconName: 'facebook-square'
			},
			{
				href: '/auth/google',
				backgroundColor: '#f03530',
				fontAwesomeIconName: 'google'
			}
		];

		return (
			<div className="row">
				<Card
					className="col s12 m6 offset-m3 center-align"
					style={styles.loginCardStyle}
				>
					<h3 style={{ paddingTop: '3%' }}>
						Enter <FontAwesome name="sign-in" style={{ color: '#aaa' }} />
					</h3>
					<h5>Please login in with...</h5>
					<CardActions>
						{loginOptionFields.map((icon, i) => {
							return (
								<RaisedButton
									key={i}
									href={icon.href}
									backgroundColor={icon.backgroundColor}
									style={styles.loginButtonStyle}
									icon={
										<FontAwesome
											name={icon.fontAwesomeIconName}
											size="2x"
											style={{ color: 'white' }}
										/>
									}
								/>
							);
						})}
						<RaisedButton
							onClick={this.anonymousHandler.bind(this)}
							primary={true}
							style={styles.loginButtonStyle}
							buttonStyle={{ top: 1 }}
							icon={
								<FontAwesome
									name="user-secret"
									size="2x"
									style={{ color: 'white' }}
								/>
							}
						/>

						<p style={{ marginTop: 0 }}>
							...your setup choices will be stored for you next visit.
						</p>
						<p>
							<b>
								If you prefer to be anonymous, choose the{' '}
								<FontAwesome
									name="user-secret"
									style={{ color: '#aaa' }}
								/>{' '}
								option.
							</b>
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
