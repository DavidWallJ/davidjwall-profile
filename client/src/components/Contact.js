import React, { Component } from 'react';
import styles from './componentsStyles';
import muiThemeable from 'material-ui/styles/muiThemeable';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

import IconFullPanel from './common/IconFullPanel';
import ContactPanel from './common/contactPanel';
import InfoModal from './common/InfoModal';

class Contact extends Component {
	nameRenderHelper(color) {
		if (this.props.name === 'Anonymous') {
			return (
				<FontAwesome
					name="user-secret"
					style={{ color: { color }, paddingLeft: 7 }}
				/>
			);
		} else {
			return ` ${this.props.name}`;
		}
	}

	renderFarewellSentence(color) {
		if (this.props.genre === 'silence') {
			return (
				<p>
					Thank you for your time<b>{this.nameRenderHelper(color)}</b>. I hope
					you've enjoyed viewing my profile and the serene sounds of silence.
				</p>
			);
		} else {
			return (
				<p>
					Thank you for your time <b>{this.nameRenderHelper(color)}</b>. I hope
					you've enjoyed viewing my profile and listening to some{' '}
					{this.props.genre} music.
				</p>
			);
		}
	}

	renderInfoModal() {
		const description = `No need to leave your contact information.  The following email address along with the setup options you choose at login have already been stored in our database.  Your email address: ${
			this.props.email
		}.`;
		if (!this.props.anonymous.auth) {
			return (
				<InfoModal
					title="Thank you for logging in!"
					description={description}
					iconName="fa fa-address-card-o"
				/>
			);
		}
	}

	render() {
		const { color } = this.props.muiTheme.appBar;

		return (
			<Card
				className="row"
				style={{ ...styles.fullPanelCard, position: 'relative' }}
			>
				<IconFullPanel iconName="face" panelTitle="Contact" color={color} />

				<div className="row textCenter" style={{ color: color, fontSize: 20 }}>
					{this.renderFarewellSentence(color)}
					<p>
						Feel free to contact me by any of the methods listed below. Let's
						build something together!
					</p>
				</div>

				<div className="row" style={{ marginTop: 52 }}>
					<ContactPanel
						iconName="mail_outline"
						contactData="davidjwall@protonmail.com"
						color={color}
						href="mailto:davidjwall@protonmail.com"
					/>
					<ContactPanel
						iconName="call"
						contactData="+886 975667693"
						color={color}
						href="tel:+886975667693"
					/>
					<div className="col s12 m4 center-align">
						<a
							href="https://www.linkedin.com/in/david-j-wall"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesome
								name="linkedin-square"
								size="5x"
								style={{ color: color, paddingBottom: 6, paddingTop: 22 }}
							/>
							<p style={{ ...styles.contactIconData, color: color }}>
								David J. Wall @ Linkedin
							</p>
						</a>
					</div>
				</div>
				<div style={{ position: 'absolute', bottom: 0, left: 0 }}>
					{this.renderInfoModal()}
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth, anonymous }) {
	return { auth, anonymous };
}
export default connect(mapStateToProps, actions)(muiThemeable()(Contact));
