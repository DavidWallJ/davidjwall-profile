import React, { Component } from 'react';
import styles from './componentsStyles';
import { connect } from 'react-redux';
import SkewedPanel from './common/SkewedPanel';
import muiThemeable from 'material-ui/styles/muiThemeable';

import IconHalfPanel from './common/IconHalfPanel';
import InfoModal from './common/InfoModal';
import GetCode from './common/GetCode';

class Fullstack extends Component {
	render() {
		const fullstackPanelFields = [
			{
				iconName: 'tv',
				description: (
					<div>
						<p>
							I can <span className="highlight">design</span> your project or take
							your already existing design and turn it into
							<span className="highlight"> responsive code </span>accessible from
							your users' <span className="highlight">mobile devices </span>and
							<span className="highlight"> desktop computers</span>.

							I can incorporate <span className="highlight">functionality </span>
							and <span className="highlight"> interactivity </span> into your website or application using
							<span className="highlight"> JavaScript </span> based libraries such
							as
							<span className="highlight"> React</span> and
							<span className="highlight"> jQuery</span>. I can seamlessly add data from
							<span className="highlight"> RESTful web services </span> and
							<span className="highlight"> APIs </span> into your website or application.
						</p>
					</div>
				)
			},
			{
				iconName: 'server',
				description: (
					<div>
						<p>
							I can <span className="highlight">create</span>,
							<span className="highlight"> manage </span> and
							<span className="highlight"> integrate </span>your
							<span className="highlight"> data</span>.

							I'm proficient in
							<span className="highlight"> server-side programming </span> using
							<span className="highlight"> Node.js </span>. I know how to work with back-end frameworks like <span className="highlight"> Express.js </span>
							to build server-side software. I'm also able to integrate
							<span className="highlight"> third-party APIs</span> into your new or existing projects.

							Most importantly, I'm able to build
							<span className="highlight"> agile </span> and
							<span className="highlight"> scalable </span> back-ends so your website or application can easily grow to
							<span className="highlight"> meet your future needs</span>.
						</p>
					</div>
				)
			},
			{
				iconName: 'heart',
				description: (
					<div>
						<p>
							I'm able to develop projects with the future in mind. On the
						front-end, 
							<span className="highlight"> reusable, modular code </span> and on
							the back-end
						<span className="highlight"> testing frameworks </span> like 
							<span className="highlight"> Mocha </span>
							<span className="highlight"> Chai </span> and 
							<span className="highlight"> Jest </span>
							to ensure that your project not only behaves exactly as you would
							like it to now but also as you would like it to in the future. I also know my way around 
							<span className="highlight"> collaboration</span> and version control software like <span className="highlight">Git </span> and 
							<span className="highlight"> GitHub </span> which allow for 
							<span className="highlight"> efficient and reliable</span> individual or team
						<span className="highlight"> web development</span>.
					</p>
					</div>
				)
			},
		];
		return (
			<section className="fullstack">
				<h3 className="title heading-3">It means that...</h3>

				{fullstackPanelFields.map((fullstackPanelField, i) => {
					return (
						<SkewedPanel
							description={fullstackPanelField.description}
							iconName={fullstackPanelField.iconName}
						/>
					)
				})};
				<div className="info-block">
					<InfoModal
						title="This website is responsive, reactive, and interactive thanks to the utilization of just a few currently popular front-end libraries and frameworks."
						description="The React components contained in this project are easily modified, repositioned and often entirely reusable. Click on the >_ icon to view the code for all of the components contained in this project."
						iconName="fa fa-info"
					/>
					<GetCode codeURL="https://github.com/DavidWallJ/davidjwall-profile/tree/master/client/src/components" />
					
				</div>
			</section>

			// <div className="row" style={{ ...styles.halfPanelCard }}>
			// 	<IconHalfPanel iconName="important_devices" panelTitle="Front End" />
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
			// 		<h5>Well it means that...</h5>
			// 		<p>
			// 			I can <span className="highlight">design</span> your project or take
			// 			your already existing design and turn it into{' '}
			// 			<span className="highlight">responsive code </span>accessible from
			// 			your users' <span className="highlight">mobile devices </span>and{' '}
			// 			<span className="highlight">desktop computers</span>.
			// 		</p>
			// 		<p>
			// 			I can incorporate <span className="highlight">functionality</span>{' '}
			// 			and <span className="highlight">interactivity </span>
			// 			into your website or application using{' '}
			// 			<span className="highlight">JavaScript </span>based libraries such
			// 			as
			// 			<span className="highlight"> React</span> and{' '}
			// 			<span className="highlight">jQuery</span>.
			// 		</p>
			// 		<p>
			// 			I can seamlessly add data from{' '}
			// 			<span className="highlight">RESTful web services </span> and{' '}
			// 			<span className="highlight">APIs </span> into your website or
			// 			application.
			// 		</p>
			// 		<div style={{ position: 'absolute', bottom: 0, right: 0 }}>
			// 			<GetCode codeURL="https://github.com/DavidWallJ/davidjwall-profile/tree/master/client/src/components" />
			// 			<InfoModal
			// 				title="This website is responsive, reactive, and interactive thanks to the utilization of just a few currently popular front-end libraries and frameworks."
			// 				description="The React components contained in this project are easily modified, repositioned and often entirely reusable. Click on the >_ icon to view the code for all of the components contained in this project."
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
export default connect(mapStateToProps)(Fullstack);
