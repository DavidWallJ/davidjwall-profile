import React, { Component } from 'react';
import styles from './componentsStyles';
import muiThemeable from 'material-ui/styles/muiThemeable';

class backendContentPanel extends Component {
	render() {
		const { textColor } = this.props.muiTheme.appBar;
		return (
			<div
				className="col s12 m6"
				style={{
					...styles.flexCenterColumn,
					...styles.contentContainer,
					backgroundColor: textColor
				}}
			>
				<h5>It also means that... </h5>
				<h5>I can create, manage and integrate your data.</h5>
				<h5>
					I'm proficient in server-side programming with Node.js, using back-end
					frameworks (like Express.js) to build server-side software , and the
					integration of API's.
				</h5>
				<h5>
					Most importantly, I'm able to build agile and scalable back-ends so
					your website or application can easily grow to meet your future needs.
				</h5>
			</div>
		);
	}
}

export default muiThemeable()(backendContentPanel);
