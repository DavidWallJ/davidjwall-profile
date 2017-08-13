import React, { Component } from 'react';

class Profile extends Component {
	render() {
		return (
			<div>
				<p>
					Hello {this.props.name}
				</p>
			</div>
		);
	}
}

export default Profile;
