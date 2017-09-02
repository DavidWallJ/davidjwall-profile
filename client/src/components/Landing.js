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
		scrollToComponent(this.refs[ref]);
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
					'https://s3-ap-northeast-1.amazonaws.com/profileaudio/drumnbass.mp3';
				break;
			case 'rock':
				audioURL = 'http://www.nihilus.net/soundtracks/Static%20Memories.mp3';
				break;
			case 'folk':
				audioURL = 'http://www.nihilus.net/soundtracks/Static%20Memories.mp3';
				break;
			case 'classical':
				audioURL =
					'http://www.mfiles.co.uk/mp3-downloads/brahms-cello-sonata-Em-1.mp3';
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
					// playFromPosition={300 /* in milliseconds */}
					// onLoading={this.handleSongLoading}
					// onPlaying={this.handleSongPlaying}
					// onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
			);
		}
	}

	render() {
		return (
			<div>
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
