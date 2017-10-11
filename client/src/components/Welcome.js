import React, { Component } from 'react';
import styles from './componentsStyles';
import * as actions from '../actions';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import IconButton from 'material-ui/IconButton';
import Typist from 'react-typist';

import InfoModal from './common/InfoModal';
import GetCode from './common/GetCode';

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

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

	componentDidMount() {
		const theme = this.props.currentTheme.theme;
		switch (theme) {
			case 'darkTheme':
				console.log('this ran');
				this.props.setBackgroundURL(
					'https://s3-ap-northeast-1.amazonaws.com/davidjwall-profileimages/caspar-rubin-224229.jpg'
				);
				break;
			default:
				return;
		}
	}

	render() {
		return (
			<div
				style={{
					backgroundImage: `url(${this.props.backgroundURL})`,
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
					title="My most recent project is this site."
					description="This site showcases much of what a good full-stack developer is capable of. Getting you the user authenticated and to this point by way of Google, LinkedIn or Facebook has already required the use of many of today's most innovative front-end and back-end web technologies.  To see the relevant code for any particular component click the  >_  icon of the corresponding section.  To see the full GitHub repository for this project click the  >_  icon for this section.
					"
					iconName="fa fa-info"
				/>

				<GetCode codeURL="https://github.com/DavidWallJ/davidjwall-profile" />
			</div>
		);
	}
}

function mapStateToProps({ auth, currentTheme, backgroundURL }) {
	return { auth, currentTheme, backgroundURL };
}
export default connect(mapStateToProps, actions)(Welcome);
