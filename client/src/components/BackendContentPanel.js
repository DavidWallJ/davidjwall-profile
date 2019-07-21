import React, { Component } from 'react';
import styles from './componentsStyles';
import muiThemeable from 'material-ui/styles/muiThemeable';

import InfoModal from './common/InfoModal';
import GetCode from './common/GetCode';

class backendContentPanel extends Component {
	render() {
		// const { textColor, color } = this.props.muiTheme.appBar;
		return (
			<div></div>
			// <div
			// 	className="col s12 m6"
			// 	style={{
			// 		...styles.flexCenterColumn,
			// 		...styles.contentContainer,
			// 		backgroundColor: textColor,
			// 		color: color
			// 	}}
			// >
			// 	<h5>It also means that... </h5>
			// 	<p>
			// 		I can <span className="highlight">create</span>,{' '}
			// 		<span className="highlight">manage </span> and{' '}
			// 		<span className="highlight">integrate </span>your{' '}
			// 		<span className="highlight">data</span>.
			// 	</p>
			// 	<p>
			// 		I'm proficient in{' '}
			// 		<span className="highlight">server-side programming </span> using{' '}
			// 		<span className="highlight">Node.js</span>. I know how to work with
			// 		back-end frameworks like <span className="highlight">
			// 			Express.js
			// 		</span>{' '}
			// 		to build server-side software. I'm also able to integrate{' '}
			// 		<span className="highlight">third-party APIs</span> into your new or
			// 		existing projects.
			// 	</p>
			// 	<p>
			// 		Most importantly, I'm able to build{' '}
			// 		<span className="highlight">agile </span> and{' '}
			// 		<span className="highlight">scalable </span> back-ends so your website
			// 		or application can easily grow to{' '}
			// 		<span className="highlight">meet your future needs</span>.
			// 	</p>
			// 	<div style={{ position: 'absolute', bottom: 0, left: 0 }}>
			// 		<InfoModal
			// 			title="This website is powered by a handful of today's most minimal and flexible Node.js frameworks."
			// 			description="The back-end of this project includes an Express powered web server hosted by Heroku, a Mongoose managed database hosted by mLabs, and flexible, modular authentication thanks to Passport authentication middleware. Click the >_ icon to see how this website uses Passport 'strategies' to handle authentication."
			// 			iconName="fa fa-info"
			// 		/>
			// 		<GetCode codeURL="https://github.com/DavidWallJ/davidjwall-profile/blob/master/services/passport.js" />
			// 	</div>
			// </div>
		);
	}
}

export default backendContentPanel;
