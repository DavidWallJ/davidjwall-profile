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
				fontAwesomeIconName: 'linkedin-square'
			},
			// {
			// 	href: '/auth/facebook',
			// 	backgroundColor: '#0077b5',
			// 	fontAwesomeIconName: 'facebook-square'
			// },
			{
				href: '/auth/google',
				backgroundColor: '#f03530',
				fontAwesomeIconName: 'google'
			},
			{
				onclick: 'this.onButtonClick.bind(this)',
				backgroundColor: '#00BCD4',
				fontAwesomeIconName: 'user-secret'
			}
		];

		return (
			<div className="loginCard">
				<h3>
					Enter <FontAwesome name="sign-in" style={{ color: '#aaa' }} />
				</h3>

				<h5>Please login in with...</h5>

				{loginOptionFields.map((icon, i) => {
					return (
						<button 
							key= { i }
							style = {{ backgroundColor: icon.backgroundColor }}
							onClick = {this.onButtonClick.bind(this, i)}
						>
							<FontAwesome
								name={icon.fontAwesomeIconName}
								size="4x"
								style={{ color: 'white' }}
							/>
						</button>
					);
				})}

				<p>
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
			</div>
		);
	}
}

function mapStateToProps({ auth, form }) {
	return { auth, form };
}

export default connect(mapStateToProps, actions)(Login);
