import React, { Component } from 'react';
import styles from './componentsStyles';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

import IconFullPanel from './common/IconFullPanel';
import ContactPanel from './common/contactPanel';

class Contact extends Component {
	renderFarewellSentence() {
		if (this.props.genre !== 'silence') {
			return (
				<p>
					Thank you for your time {this.props.name}. I hope you've enjoyed
					viewing my profile and listening to some {this.props.genre} music.
				</p>
			);
		} else {
			return (
				<p>
					Thank you for your time <b>{this.props.name}</b>. I hope you've
					enjoyed viewing my profile and the serene sounds of silence.
				</p>
			);
		}
	}

	render() {
		const { color } = this.props.muiTheme.appBar;

		return (
			<Card className="row" style={styles.fullPanelCard}>
				<IconFullPanel iconName="face" panelTitle="Contact" color={color} />

				<div
					className="row"
					style={{ color: color, textAlign: 'center', fontSize: 20 }}
				>
					{this.renderFarewellSentence()}
					<p>
						Feel free to contact me by any of the methods listed below. Let's
						build something together!
					</p>
				</div>

				<div className="row">
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
								style={{ color: color, paddingBottom: 6, paddingTop: 2 }}
							/>
							<p style={{ color: color }}>David J. Wall @ Linkedin</p>
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
