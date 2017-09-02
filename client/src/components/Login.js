import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

import { Card, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
	anonymousHandler() {
		this.props.setAnonymous({ auth: false, options: [] });
	}

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
						<RaisedButton
							onClick={this.anonymousHandler.bind(this)}
							label="Anonymous"
							primary={true}
							fullWidth={true}
							style={buttonStyle}
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
