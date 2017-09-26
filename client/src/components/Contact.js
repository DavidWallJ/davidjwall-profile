import React, { Component } from 'react';
import styles from './componentsStyles';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

import IconFullPanel from './common/IconFullPanel';
import ContactPanel from './common/contactPanel';

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
					Thank you for your time {this.nameRenderHelper(color)} . I hope you've
					enjoyed viewing my profile and listening to some {this.props.genre}{' '}
					music.
				</p>
			);
		}
	}

	render() {
		const { color } = this.props.muiTheme.appBar;

		return (
			<Card className="row" style={styles.fullPanelCard}>
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
				<div className="row" style={{ paddingTop: 38 }}>
					<div className="col s6 center-align transformGrow">
						<a
							onClick={() => this.props.scrollCallback('welcome')}
							style={{
								color: '#ff80ab',
								textDecoration: 'none',
								cursor: 'pointer'
							}}
						>
							<FontAwesome className="home" name="home" /> Home
						</a>
					</div>

					<div className="col s6 center-align transformGrow">
						<a
							href="/api/logout"
							style={{
								color: '#ff80ab',
								textDecoration: 'none'
							}}
						>
							Logout <FontAwesome className="sign-out" name="sign-out" />
						</a>
					</div>
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Contact));
