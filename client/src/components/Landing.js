import React, { Component } from 'react';
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
import Projects from './Projects';
import Contact from './Contact';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = { position: 0 };
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
		if (this.props.auth) {
			const {
				options,
				linkedinDisplayName,
				googleDisplayName,
				facebookDisplayName
			} = this.props.auth;
			switch (options.length > 0 || this.props.anonymous.auth === true) {
				case true:
					return (
						<div>
							<Header scrollCallback={this.scrollCallbackHandler} />
							<Welcome
								name={
									linkedinDisplayName ||
									googleDisplayName ||
									facebookDisplayName ||
									'Anonymous'
								}
							/>
							<Frontend ref="frontend" />
							<Backend ref="backend" />
							<WithCare ref="withCare" />
							<Projects ref="projects" />
							<Contact ref="contact" />
						</div>
					);
				default:
					return <OptionsForm onChange={this.onChangeForm.bind(this)} />;
			}
		}

		return <Login />;
	}

	renderAudio() {
		let audioURL = '';
		let playStatus = '';
		switch (this.props.audioOptions.genre) {
			case 'dance':
				audioURL =
					'https://s3-ap-northeast-1.amazonaws.com/profileaudio/dance.mp3';
				break;
			case 'rock':
				audioURL =
					'https://s3-ap-northeast-1.amazonaws.com/profileaudio/rock.mp3';
				break;
			case 'hipHop':
				audioURL =
					'https://s3-ap-northeast-1.amazonaws.com/profileaudio/hiphop.mp3';
				break;
			case 'classical':
				audioURL =
					'https://s3-ap-northeast-1.amazonaws.com/profileaudio/classical.mp3';
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
		const altColor = this.props.muiTheme.slider.trackColorSelected;
		return (
			<div style={{ backgroundColor: altColor, height: window.innerHeight }}>
				{this.renderAudio()}
				{this.renderOptions()}
			</div>
		);
	}
}

function mapStateToProps({ auth, audioOptions, anonymous }) {
	return { auth, audioOptions, anonymous };
}

export default connect(mapStateToProps, actions)(muiThemeable()(Landing));
