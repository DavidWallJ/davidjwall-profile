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
		const { color, textColor } = this.props.muiTheme.appBar;
		const altColor = this.props.muiTheme.slider.trackColorSelected;

		return (
			<Card
				className="row"
				style={{
					...styles.fullPanelCard,
					backgroundColor: altColor,
					position: 'relative'
				}}
			>
				<IconFullPanel
					iconName="code"
					panelTitle="Projects"
					color={textColor}
				/>
				<div className="col s12">
					<p
						style={{
							...styles.flexCenterColumn,
							color: textColor,
							paddingBottom: 26
						}}
					>
						* Check the 'Featured' box to view my most recent projects.
					</p>
				</div>
				<div
					className="col s12 l5"
					style={{
						...styles.flexCenterColumn,
						color: textColor
					}}
				>
					<h5>Technologies</h5>
					<TechnologiesForm color={color} textColor={textColor} />
				</div>
				<div
					className="col s12 l7"
					style={{
						...styles.flexCenterColumn,
						color: textColor
					}}
				>
					<h5>Links</h5>
					<LinkList color={color} textColor={textColor} />
				</div>
				<div style={{ position: 'absolute', bottom: 0, left: 0 }}>
					<InfoModal
						title="This website is responsive, reactive, and interactive."
						description="...thanks to the utilization of just a few currently popular front-end libraries and frameworks.  The most notable include: React, Redux, Redux Form, Axios, and Material UI."
					/>
					<GetCode codeURL="https://github.com/DavidWallJ/davidjwall-profile/tree/master/client/src/components" />
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Projects));
