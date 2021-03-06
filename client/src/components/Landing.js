import React, { Component } from 'react';
import styles from './componentsStyles';
import Sound from 'react-sound';
import muiThemeable from 'material-ui/styles/muiThemeable';
import scrollToComponent from 'react-scroll-to-component';
import * as actions from '../actions';
import { connect } from 'react-redux';

import OptionsForm from './options/OptionsForm';
import Header from './Header';
import Login from './Login';
import Welcome from './Welcome';
import Frontend from './Frontend';
import Backend from './Backend';
import WithCare from './WithCare';
import Fullstack from './Fullstack';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			position: 0
		};
		this.handlePlaying = this.handlePlaying.bind(this);
		this.handleFinishedPlaying = this.handleFinishedPlaying.bind(this);
	}

	handlePlaying(ev) {
		this.setState({ position: ev.position });
	}

	handleFinishedPlaying() {
		this.setState({ position: 0 });
	}

	onChangeForm({ theme, genre }) {
		this.props.setTheme({ theme });
		if (genre === 'silence') {
			this.props.setAudio({ genre, status: 'STOPPED' });
		} else if (genre) {
			this.props.setAudio({ genre, status: 'PLAYING' });
		}
	}

	async componentDidMount() {
		await this.props.fetchUser();
		if (this.props.auth && this.props.auth.options.length > 0) {
			const { theme, genre } = this.props.auth.options[0];
			// set background image var for welcome screen
			switch (theme) {
				case 'darkTheme':
					this.props.setBackgroundURL(
						'https://s3-ap-northeast-1.amazonaws.com/davidjwall-profileimages/caspar-rubin-224229-shrunk.jpg'
					);
					break;
				default:
					break;
			}

			this.props.setTheme({ theme });
			if (genre === 'silence') {
				this.props.setAudio({ genre, status: 'STOPPED' });
			} else if (genre) {
				this.props.setAudio({ genre, status: 'PLAYING' });
			}
		}
	}

	scrollCallbackHandler = ref => {
		scrollToComponent(this.refs[ref], {
			align: 'middle'
		});
	};

	renderOptions() {
		// if user is authenticated
		if (this.props.auth) {
			const {
				options,
				linkedinDisplayName,
				googleDisplayName,
				facebookDisplayName,
				linkedinEmail,
				googleEmail,
				facebookEmail
			} = this.props.auth;

			const name =
				linkedinDisplayName ||
				googleDisplayName ||
				facebookDisplayName ||
				'Anonymous';

			const email = linkedinEmail || googleEmail || facebookEmail || 'unknown';
			
			switch (options.length > 0 || this.props.anonymous.auth === true) {
				// if anonymous authentication has been selected
				case true:
					return (
						<div className="container-fluid">
							<Header scrollCallback={this.scrollCallbackHandler} />
							<Welcome
								ref="welcome"
								name={name}
								currentBackgroundURL={this.state.currentBackgroundURL}
							/>
							<Fullstack ref="fullstack" />
							{/* <Frontend ref="frontend" />
							<Backend ref="backend" />
							<WithCare ref="withCare" /> */}
							<Projects ref="projects" />
							<Education ref="education" />
							<Contact
								ref="contact"
								name={name}
								email={email}
								genre={this.props.audioOptions.genre}
							/>
							<Footer scrollCallback={this.scrollCallbackHandler} />
						</div>
					);
				// if onymous authentication has been selected
				default:
					return <OptionsForm onChange={this.onChangeForm.bind(this)} />;
			}
		}
		// if user has not been authenticated or choosen an authentication option
		return (
			<div className="container-fluid">
				<Login />
			</div>
		);
	}

	renderAudio() {
		let audioURL = '';
		let playStatus = '';
		switch (this.props.audioOptions.genre) {
			case 'dance':
				audioURL =
					'https://s3-ap-northeast-1.amazonaws.com/profileaudio/danceCROP.mp3';
				break;
			case 'rock':
				audioURL =
					'https://s3-ap-northeast-1.amazonaws.com/profileaudio/rockCROP.mp3';
				break;
			case 'hipHop':
				audioURL =
					'https://s3-ap-northeast-1.amazonaws.com/profileaudio/hiphopCROP.mp3';
				break;
			case 'classical':
				audioURL =
					'https://s3-ap-northeast-1.amazonaws.com/profileaudio/classicalCROP.mp3';
				break;
			default:
				audioURL = '';
				break;
		}

		if (this.props.audioOptions.status === 'PLAYING') {
			playStatus = Sound.status.PLAYING;

			return (
				<Sound
					url={audioURL}
					playStatus={playStatus}
					position={this.state.position}
					onPlaying={this.handlePlaying}
					onFinishedPlaying={this.handleFinishedPlaying}
				/>
			);
		}
	}

	render() {
		// const altColor = this.props.muiTheme.slider.trackColorSelected;
		// backgroundColor: altColor, 
		return (
			<div style={{ height: window.innerHeight }}>
				{this.renderAudio()}
				{this.renderOptions()}
			</div>
		);
	}
}

function mapStateToProps({ auth, audioOptions, anonymous }) {
	return { auth, audioOptions, anonymous };
}

export default connect(mapStateToProps, actions)(Landing);
