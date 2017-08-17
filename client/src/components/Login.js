import React, { Component } from 'react';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
	render() {
		const buttonStyle = {
			marginBottom: 12,
			textColor: 'white'
		};

		const cardStyle = {
			marginTop: 12
		};

		return (
			<div className="row">
				<Card className="col s12 m6 offset-m3 center-align" style={cardStyle}>
					<CardTitle title="Welcome" subtitle="Please login in with..." />
					<CardActions>
						<a href="/auth/linkedin">
							<RaisedButton
								label="Linkedin"
								primary={true}
								fullWidth={true}
								style={buttonStyle}
							/>
						</a>
						<a href="/auth/facebook">
							<RaisedButton
								label="Facebook"
								primary={true}
								fullWidth={true}
								style={buttonStyle}
							/>
						</a>
						<a href="/auth/google">
							<RaisedButton
								label="Google"
								primary={true}
								fullWidth={true}
								style={buttonStyle}
							/>
						</a>
					</CardActions>
				</Card>
			</div>
		);
	}
}

export default Login;
