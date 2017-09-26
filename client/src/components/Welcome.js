import React, { Component } from 'react';
import styles from './componentsStyles';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import Typist from 'react-typist';

import InfoModal from './common/InfoModal';

class Welcome extends Component {
	nameRenderHelper() {
		if (this.props.name === 'Anonymous') {
			return (
				<FontAwesome
					name="user-secret"
					style={{ color: '#ff80ab', paddingLeft: 7 }}
				/>
			);
		} else {
			return this.props.name;
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			currentBackgroundURL:
				'https://s3-ap-northeast-1.amazonaws.com/davidjwall-profileimages/lightthemebackgroundimage.JPG',
			open: false
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
					background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${this
						.state.currentBackgroundURL})`,
					color: 'white',
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
			>
				<div
					style={{
						...styles.flexCenterColumn,
						height: 600
					}}
				>
					<h5 style={{ textAlign: 'center' }}>Welcome</h5>
					<h2
						style={{ color: '#ff80ab', textAlign: 'center', paddingBottom: 10 }}
					>
						{this.nameRenderHelper()}
					</h2>
					<Typist
						cursor={{ show: false }}
						startDelay={1500}
						avgTypingDelay={100}
					>
						<h5 style={{ textAlign: 'center' }}>My name is David J. Wall.</h5>
						<h4 style={{ textAlign: 'center' }}>
							I'm a full-stack web developer.
						</h4>
						<p style={{ textAlign: 'center' }}>
							What exactly do i mean by that?
						</p>
						<p style={{ textAlign: 'center' }}>. . . . . . .</p>
						<p style={{ textAlign: 'center' }}>( scroll down )</p>
					</Typist>
					<a
						href="/api/logout"
						style={{ color: '#ff80ab', textDecoration: 'none' }}
					>
						<p
							style={{ paddingTop: 22 }}
							className="transformGrow
transformGrow"
						>
							Logout <i className="fa fa-sign-out" aria-hidden="true" />
						</p>
					</a>
				</div>
				<InfoModal
					title="My most recent and relevant project is this site."
					description="This site showcases much of what I have learned as a web developer.  Aside from the libraries utilized, this website is 100% my own code. Getting you the user authenticated and to this point has already required a strong understanding of many front-end and back-end web technologies."
				/>
			</div>
		);
	}
}

function mapStateToProps({ auth, currentTheme }) {
	return { auth, currentTheme };
}
export default connect(mapStateToProps)(Welcome);
