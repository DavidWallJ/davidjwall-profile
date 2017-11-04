import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import projects from './projectsData';
import ShadowScrollbars from './ShadowScrollbars';
import FontIcon from 'material-ui/FontIcon';

class ProjectsLinkList extends Component {
	render() {
		// put form technologies in to an array called results
		let technologies = [];
		const { values } = this.props.form.technologies;
		if (values) {
			technologies = Object.keys(values);
		}

		const results = projects.filter(project => {
			return !technologies.some(s => project.technologies.indexOf(s) === -1);
		});

		return (
			<ShadowScrollbars style={{ height: 380, width: '98%', fontSize: 14 }}>
				<List>
					{results.map((result, i) => {
						const demoRenderHelper = function(props) {
							if (result.link) {
								return (
									<a href={result.link} target="_blank">
										<FontIcon
											style={{
												color: props.textColor,
												display: 'inline-block',
												position: 'absolute',
												bottom: 5,
												left: 375
											}}
											className="material-icons legendIconPlay"
										>
											play_arrow
										</FontIcon>
									</a>
								);
							}
						};

						const codeRenderHelper = function(props) {
							if (result.githubLink) {
								return (
									<a href={result.githubLink} target="_blank">
										<FontIcon
											style={{
												color: props.textColor,
												display: 'inline-block',
												position: 'absolute',
												bottom: 5,
												left: 320
											}}
											className="material-icons legendIconCode"
										>
											code
										</FontIcon>
									</a>
								);
							}
						};
						return (
							<ListItem
								innerDivStyle={{
									padding: 1,
									marginLeft: 11,
									cursor: 'default'
								}}
								key={i}
							>
								<p
									style={{
										color: this.props.textColor,
										fontSize: '1em',
										fontWeight: 300,
										lineHeight: 0,
										display: 'inline-block'
									}}
									className="linkListName"
								>
									{result.name}
								</p>
								{codeRenderHelper(this.props)}
								{demoRenderHelper(this.props)}
							</ListItem>
						);
					})}
				</List>
			</ShadowScrollbars>
		);
	}
}

function mapStateToProps({ form }) {
	return { form };
}

export default connect(mapStateToProps)(ProjectsLinkList);
