import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './componentsStyles';
import * as actions from '../actions';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
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

	componentDidMount() {
		const themeSwitch = document.getElementById('theme-switch'),
			mainContainer = document.getElementById('main-container');

		if (
			this.props.auth &&
			mainContainer && 
			document.getElementsByClassName('welcome').length >= 1
		) {
			mainContainer.classList.remove(...mainContainer.classList);
			mainContainer.classList.add(this.props.currentTheme);
		}

		if (themeSwitch) {
			if (this.props.currentTheme === 'theme-light') {
				themeSwitch.classList.remove('fa-toggle-off');
				themeSwitch.classList.add('fa-toggle-on');
			} else {
				themeSwitch.classList.remove('fa-toggle-on');
				themeSwitch.classList.add('fa-toggle-off');
			}
		}
	}

	nameRenderHelper() {
		if (this.props.name === 'Anonymous') {
			return 'Anonymous User'
		} else {
			return this.props.name;
		}
	}

	themeSwitchHelper() {
		let themeSwitch = document.getElementById('theme-switch');
		if (this.props.currentTheme === 'theme-light') {
			this.props.setTheme({ theme: 'theme-dark' });
			themeSwitch.classList.remove('fa-toggle-on');
			themeSwitch.classList.add('fa-toggle-off');
		} else {
			this.props.setTheme({ theme: 'theme-light' });
			themeSwitch.classList.remove('fa-toggle-off');
			themeSwitch.classList.add('fa-toggle-on');
		}
		
		
	}

	render() {
		return (
			<div className="welcome">
				<div className="control-panel">
					<a className="control-panel__logout" href="/api/logout">
						<FontAwesome name="sign-out" />
					</a>
					<FontAwesome id="theme-switch" name="toggle-on" onClick={this.themeSwitchHelper.bind(this)} />

				</div>
				<div className="greeting">
					<Typist
						cursor={{ show: false }}
						startDelay={500}
						avgTypingDelay={90}
					>
						<h4 className="greeting__title heading-4">Welcome</h4>
						
						<h2 className="greeting__user-name heading-2">
							{this.nameRenderHelper()}
						</h2>

						<h3 className="heading-3">My name is David J. Wall</h3>
						<h4 className="heading-4">
							I'm a full-stack web developer
						</h4>
						<p>
							What exactly do i mean by that?
						</p>
						<p>( scroll down )</p>
					</Typist>

				</div>
				<div className="info-block">
					<InfoModal
							title="My most recent project is this site."
							description="This site showcases much of what a good full-stack developer is capable of. Getting you the user authenticated and to this point by way of Google, LinkedIn or Facebook has already required the use of many of today's most innovative front-end and back-end web technologies.  To see the relevant code for any particular component click the  >_  icon of the corresponding section.  To see the full GitHub repository for this project click the  >_  icon for this section.
							"
							iconName="fa fa-info"
						/>
					<GetCode codeURL="https://github.com/DavidWallJ/davidjwall-profile" />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ auth, currentTheme, backgroundURL }) {	
	return { auth, currentTheme, backgroundURL };
}
export default connect(mapStateToProps, actions)(Welcome);
