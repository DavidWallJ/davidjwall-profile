import React, { Component } from 'react';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import * as actions from '../actions';
import OptionsForm from './options/OptionsForm';
import Login from './Login';
import Profile from './Profile';

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

	renderOptions() {
		if (this.props.auth) {
			const {
				options,
				linkedinDisplayName,
				googleDisplayName,
				facebookDisplayName
			} = this.props.auth;
			switch (options.length > 0) {
				case true:
					return (
						<Profile
							name={
								linkedinDisplayName || googleDisplayName || facebookDisplayName
							}
						/>
					);
				default:
					return <OptionsForm onChange={this.onChangeForm.bind(this)} />;
			}
		}

		return <Login />;
	}

	// you are here
	// can you access mp3s from dropbox?
	renderAudio() {
		let audioURL = '';
		let playStatus = '';
		switch (this.props.audioOptions.genre) {
			case 'dance':
				audioURL = 'https://db.tt/tU9KbBeFdT';
				break;
			case 'rock':
				audioURL = 'http://www.nihilus.net/soundtracks/Static%20Memories.mp3';
				break;
			case 'folk':
				audioURL = 'http://www.nihilus.net/soundtracks/Static%20Memories.mp3';
				break;
			case 'classical':
				audioURL = 'http://www.nihilus.net/soundtracks/Static%20Memories.mp3';
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

function mapStateToProps({ auth, audioOptions }) {
	return { auth, audioOptions };
}

export default connect(mapStateToProps, actions)(muiThemeable()(Landing));
