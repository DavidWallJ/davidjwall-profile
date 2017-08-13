import React, { Component } from 'react';
import Options from './Options';

class Profile extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h3>
					Hello {this.props.name}
				</h3>
				<a href="/api/logout">( Logout )</a>
				<Options />
			</div>
		);
	}
}

export default Profile;
