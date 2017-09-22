import React, { Component } from 'react';
import styles from './componentsStyles';
import muiThemeable from 'material-ui/styles/muiThemeable';

class backendContentPanel extends Component {
	render() {
		const { textColor, color } = this.props.muiTheme.appBar;
		return (
			<div
				className="col s12 m6"
				style={{
					...styles.flexCenterColumn,
					...styles.contentContainer,
					backgroundColor: textColor,
					color: color
				}}
			>
				<h5>It also means that... </h5>
				<p>
					I can <span className="highlight">create</span>,{' '}
					<span className="highlight">manage </span> and{' '}
					<span className="highlight">integrate </span>your{' '}
					<span className="highlight">data</span>.
				</p>
				<p>
					I'm proficient in{' '}
					<span className="highlight">server-side programming </span> with{' '}
					<span className="highlight">Node.js</span>, using back-end frameworks
					like <span className="highlight">Express.js</span> to build
					server-side software, and able to integrate{' '}
					<span className="highlight">APIs</span>.
				</p>
				<p>
					Most importantly, I'm able to build{' '}
					<span className="highlight">agile </span> and{' '}
					<span className="highlight">scalable </span> back-ends so your website
					or application can easily grow to{' '}
					<span className="highlight">meet your future needs</span>.
				</p>
			</div>
		);
	}
}

export default muiThemeable()(backendContentPanel);
