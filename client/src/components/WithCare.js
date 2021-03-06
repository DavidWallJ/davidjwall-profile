import React, { Component } from 'react';
import styles from './componentsStyles';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';

import InfoModal from './common/InfoModal';
import IconHalfPanel from './common/IconHalfPanel';
import GetCode from './common/GetCode';

class WithCare extends Component {
	render() {
		// const { textColor, color } = this.props.muiTheme.appBar;

		return (
			<div></div>
			// <div className="row" style={{ ...styles.halfPanelCard }}>
			// 	<IconHalfPanel iconName="favorite" panelTitle="With Care" />
			// 	<div
			// 		className="col s12 m6 "
			// 		style={{
			// 			...styles.flexCenterColumn,
			// 			...styles.contentContainer,
			// 			backgroundColor: textColor,
			// 			color: color,
			// 			height: '100%'
			// 		}}
			// 	>
			// 		<h5>In addition to all this... </h5>
			// 		<p>
			// 			I'm able to develop projects with the future in mind. On the
			// 			front-end,{' '}
			// 			<span className="highlight">reusable, modular code </span> and on
			// 			the back-end
			// 			<span className="highlight"> testing frameworks </span> like{' '}
			// 			<span className="highlight">Mocha </span>
			// 			<span className="highlight">Chai</span> and{' '}
			// 			<span className="highlight">Jest </span>
			// 			to ensure that your project not only behaves exactly as you would
			// 			like it to now but also as you would like it to in the future.
			// 		</p>
			// 		<p>
			// 			I also know my way around{' '}
			// 			<span className="highlight">collaboration</span> and version control
			// 			software like <span className="highlight">Git </span> and{' '}
			// 			<span className="highlight">GitHub </span> which allow for{' '}
			// 			<span className="highlight"> efficient and reliable</span>{' '}
			// 			individual or team
			// 			<span className="highlight"> web development</span>.
			// 		</p>

			// 		<div style={{ position: 'absolute', bottom: 0, right: 0 }}>
			// 			<GetCode codeURL="https://github.com/DavidWallJ/davidjwall-profile/blob/master/client/src/components/common/IconHalfPanel.js" />

			// 			<InfoModal
			// 				title="This project is built with the future in mind."
			// 				description="Both the visible front-end components and the back-end database can easily be modified and/or expanded on. Future content can be added quickly by reusing code that has been designed to be modular. Click on the >_ icon to view an example of a reusable front-end component."
			// 				iconName="fa fa-info"
			// 			/>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(WithCare);
