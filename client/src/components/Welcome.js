// import classes from './welcome.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

let currentBackgroundURL = '';

class Welcome extends Component {
	componentWillMount() {
		console.log('componentWillMount: ', this.props);
		switch (this.props.currentTheme.theme) {
			case 'darkTheme':
				currentBackgroundURL =
					'https://s3-ap-northeast-1.amazonaws.com/davidjwall-profileimages/caspar-rubin-224229.jpg';
				break;
			default:
				currentBackgroundURL =
					'https://s3-ap-northeast-1.amazonaws.com/davidjwall-profileimages/marc-mueller-210523.jpg';
		}
	}
	render() {
		console.log('currentBackgroundURL: ', currentBackgroundURL);
		return (
			<div
				style={{
					backgroundImage: `url(${currentBackgroundURL})`,
					color: 'white',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					textAlign: 'center',
					height: 600
				}}
			>
				<h2>
					Hello {this.props.name}
				</h2>
				<h5>Welcome to my Welcome Page</h5>
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
