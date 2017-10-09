import React, { Component } from 'react';
import styles from './componentsStyles';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card } from 'material-ui/Card';

import IconHalfPanel from './common/IconHalfPanel';
import InfoModal from './common/InfoModal';
import GetCode from './common/getCode';

class Frontend extends Component {
	render() {
		const { textColor, color } = this.props.muiTheme.appBar;
		return (
			<Card className="row" style={{ ...styles.halfPanelCard }}>
				<div
					className="col s12"
					style={{
						padding: 0,
						position: 'relative'
					}}
				>
					<IconHalfPanel iconName="important_devices" panelTitle="Front End" />
					<div
						className="col s12 m6 "
						style={{
							...styles.flexCenterColumn,
							...styles.contentContainer,
							backgroundColor: textColor,
							color: color
						}}
					>
						<h5>Well it means that...</h5>
						<p>
							I can <span className="highlight">design</span> your project or
							take your already existing design and turn it into{' '}
							<span className="highlight">responsive code </span>accessible from
							your users' <span className="highlight">mobile devices </span>and{' '}
							<span className="highlight">desktop computers</span>.
						</p>
						<p>
							I can incorporate <span className="highlight">
								functionality
							</span>{' '}
							and <span className="highlight">interactivity </span>
							into your website or application using{' '}
							<span className="highlight">JavaScript </span>based libraries such
							as
							<span className="highlight"> React</span> and{' '}
							<span className="highlight">jQuery</span>.
						</p>
						<p>
							I can seamlessly add data from{' '}
							<span className="highlight">RESTful web services </span> and{' '}
							<span className="highlight">APIs </span> into your website or
							application.
						</p>
						<div style={{ position: 'absolute', bottom: 0, right: 0 }}>
							<GetCode codeURL="https://github.com/DavidWallJ/davidjwall-profile/tree/master/client/src/components" />
							<InfoModal
								title="This website is responsive, reactive, and interactive thanks to the utilization of just a few currently popular front-end libraries and frameworks."
								description="The React components contained in this project are easily modified, repositioned and often entirely reusable. Click on the >_ icon to view the code for all of the components contained in this project."
								iconName="fa fa-info"
							/>
						</div>
					</div>
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Frontend));
