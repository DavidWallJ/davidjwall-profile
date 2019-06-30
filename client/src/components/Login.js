import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';


class Login extends Component {
	// you are here.  how do you redirect in react from within a function
	onButtonClick(index) {
		switch (index) {
			case 0: {
				//statements; 
				break;
			}
			case 1: {
				//statements;
				break;
			}
			default: {
				console.log('this', this)
				this.props.setAnonymous({ auth: false, options: [] });
				break;
			} 
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
				onclick: 'this.onButtonClick.bind(this)',
				backgroundColor: '#00BCD4',
				fontAwesomeIconName: 'user-secret',
				label: 'Anonymously'
			}
		];

		return (
			<div className="login">
				<div className="form">
					<h2 className="form__title heading-2">
						Enter <FontAwesome name="sign-in" />
					</h2>

					<div className="form__buttons">
						{loginOptionFields.map((icon, i) => {
							return (
								<div
									key={i}
									className="button"
									style={{ backgroundColor: icon.backgroundColor }}
									onClick={this.onButtonClick.bind(this, i)}
								>
									<FontAwesome
										name={icon.fontAwesomeIconName}
										size="4x"
										style={{ color: 'white' }}
									/>
									<h4 className="button__label" >Login {icon.label} </h4>
								</div>
							);
						})}
					</div>
					<div className="form__instructions">
						<p>
							Your setup choices will be stored for you next visit.
						</p>
						<b>
							If you prefer to be anonymous, choose the{' '}
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

export default connect(mapStateToProps, actions)(Login);
