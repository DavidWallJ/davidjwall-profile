// import classes from './welcome.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

let currentBackgroundURL = '';

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentBackgroundURL:
				'https://s3-ap-northeast-1.amazonaws.com/davidjwall-profileimages/goran-ivos-246271.jpg'
		};
	}

	componentWillMount() {
		switch (this.props.currentTheme.theme) {
			case 'darkTheme':
				this.setState({
					currentBackgroundURL:
						'https://s3-ap-northeast-1.amazonaws.com/davidjwall-profileimages/caspar-rubin-224229.jpg'
				});
				break;
			default:
				return;
		}
	}
	render() {
		return (
			<div
				style={{
					backgroundImage: `url(${this.state.currentBackgroundURL})`,
					color: 'white',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: 600,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				<h2>
					Hello {this.props.name}
				</h2>
				<h5>Welcome to my Profile Page</h5>
				<a href="/api/logout">( Logout )</a>
			</div>
		);
	}
}

const styles = {
	welcome: {}
};

function mapStateToProps({ auth, currentTheme }) {
	return { auth, currentTheme };
}
export default connect(mapStateToProps)(Welcome);
