import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import * as actions from '../actions';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';


class Login extends Component {
	onButtonClick(loginOption) {
		console.log(loginOption);

		if (loginOption.href) {
			window.location = loginOption.href;
		} else {
			this.props.setAnonymous({ auth: false, options: [] });
		}
	}
 
	render() {
		const loginOptionFields = [
			{
				href: '/auth/linkedin',
				backgroundColor: '#4267b2',
				fontAwesomeIconName: 'linkedin-square',
				label: 'with LinkedIn'
			},
			// {
			// 	href: '/auth/facebook',
			// 	backgroundColor: '#0077b5',
			// 	fontAwesomeIconName: 'facebook-square'
			// },
			{
				href: '/auth/google',
				backgroundColor: '#f03530',
				fontAwesomeIconName: 'google',
				label: 'with Google'
			},
			{
				backgroundColor: '#00BCD4',
				fontAwesomeIconName: 'user-secret',
				label: 'Anonymously'
			}
		];

		return (
			<div className="login">
				<div className="form-container">
					<h1 className="form-container__title heading-1">
						Enter <FontAwesome name="sign-in" />
					</h1>

					<div className="form-container__buttons">
						{loginOptionFields.map((loginOption, i) => {
							return (
								<div
									key={i}
									className="button"
									style={{ backgroundColor: loginOption.backgroundColor }}
									onClick={() => {
											this.onButtonClick(loginOption);
										}
									}
								>
									<FontAwesome
										name={loginOption.fontAwesomeIconName}
										size="4x"
										style={{ color: 'white' }}
									/>
									<span className="button__label" >Login {loginOption.label} </span>
								</div>
							);
						})}
					</div>
					<div className="form-container__instructions">
						<p>
							Your setup choices will be stored for your next visit.
						</p>
						<b>
							If you prefer remain to unknown, choose the{' '}
							<FontAwesome
								name="user-secret"
								style={{ color: '#aaa' }}
							/>{' '}
							option.
						</b>
					</div>
				</div>
				<div className="placeholder"></div>
			</div>
		);
	}
}

function mapStateToProps({ auth, form }) {
	return { auth, form };
}

export default connect(mapStateToProps, actions)(withRouter(Login));
