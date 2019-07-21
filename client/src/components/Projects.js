import React, { Component } from 'react';
import styles from './componentsStyles';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';

import TechnologiesForm from './ProjectsTechnologiesForm';
import LinkList from './ProjectsLinkList';
import IconFullPanel from './common/IconFullPanel';
import InfoModal from './common/InfoModal';
import GetCode from './common/GetCode';

class Projects extends Component {
	render() {
		// const { color, textColor } = this.props.muiTheme.appBar;
		// const altColor = this.props.muiTheme.slider.trackColorSelected;

		return (
			<div></div>
			// <Card
			// 	className="row"
			// 	style={{
			// 		...styles.fullPanelCard,
			// 		backgroundColor: altColor,
			// 		position: 'relative'
			// 	}}
			// >
			// 	<IconFullPanel
			// 		iconName="code"
			// 		panelTitle="Projects"
			// 		color={textColor}
			// 	/>
			// 	<div className="col s12">
			// 		<p
			// 			style={{
			// 				...styles.flexCenterColumn,
			// 				color: textColor,
			// 				paddingBottom: 26
			// 			}}
			// 		>
			// 			* Check the 'Featured' box to view my most recent projects.
			// 		</p>
			// 	</div>
			// 	<div
			// 		className="col s12 l5"
			// 		style={{
			// 			...styles.flexCenterColumn,
			// 			color: textColor,
			// 			paddingBottom: 50
			// 		}}
			// 	>
			// 		<h5>Technologies</h5>
			// 		<TechnologiesForm color={color} textColor={textColor} />
			// 	</div>
			// 	<div
			// 		className="col s12 l7"
			// 		style={{
			// 			...styles.flexCenterColumn,
			// 			color: textColor,
			// 			paddingBottom: 42
			// 		}}
			// 	>
			// 		<h5>Links</h5>
			// 		<LinkList color={color} textColor={textColor} />
			// 		<p style={{ position: 'relative' }}>
			// 			<FontIcon
			// 				style={{
			// 					color: this.props.textColor,
			// 					fontSize: 14,
			// 					display: 'inline-block',
			// 					bottom: -3
			// 				}}
			// 				className="material-icons"
			// 			>
			// 				code
			// 			</FontIcon>{' '}
			// 			code
			// 			<FontIcon
			// 				style={{
			// 					color: this.props.textColor,
			// 					fontSize: 14,
			// 					display: 'inline-block',
			// 					paddingLeft: 126,
			// 					bottom: -3
			// 				}}
			// 				className="material-icons"
			// 			>
			// 				play_arrow
			// 			</FontIcon>{' '}
			// 			demo
			// 		</p>
			// 	</div>
			// 	<div style={{ position: 'absolute', bottom: 0, left: 0 }}>
			// 		<InfoModal
			// 			title="Dynamic content is made easy when using React with Redux."
			// 			description="This component is a basic demonstration of how React with Redux allows for nearly instantaneous rerendering without having to reload the page. Click on the >_ icon to view the code for this section.  See how the use of Redux state allows for instantaneous changes to occur in the 'Links' list component of the 'Projects' section when checkboxes are selected in the 'Technologies' form component."
			// 			iconName="fa fa-info"
			// 		/>
			// 		<GetCode codeURL="https://github.com/DavidWallJ/davidjwall-profile/blob/master/client/src/components/Projects.js" />
			// 	</div>
			// </Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(Projects);
