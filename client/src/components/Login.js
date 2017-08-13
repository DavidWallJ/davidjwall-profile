import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s12 m4 offset-m4 center-align">
					<ul className="collection with-header">
						<li className="collection-header">
							<h1>Welcome</h1>
							<p>Please login with...</p>
						</li>
						<li className="collection-item">
							<a href="/auth/linkedin">Linkedin</a>
						</li>
						<li className="collection-item">
							<a href="/auth/google">Google</a>
						</li>
						<li className="collection-item">
							<a href="/auth/facebook">Facebook</a>
						</li>
						<li className="collection-item">Anonymous</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Login;
