import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import projects from './projectsData';
import ShadowScrollbars from './ShadowScrollbars';
import FontIcon from 'material-ui/FontIcon';

// you are here.  you still need to add some of your graphql projects
class ProjectsLinkList extends Component {
	render() {
		// put form technologies in to an array called results
		let keys = [];
		const { values } = this.props.form.technologies;
		if (values) {
			keys = Object.keys(values);
		}

		const results = projects.filter(project => {
			return !keys.some(s => project.technologies.indexOf(s) === -1);
		});

		return (
			<ShadowScrollbars style={{ height: 380, width: '90%' }}>
				<List>
					{results.map((result, i) => {
						return (
							<ListItem
								innerDivStyle={{
									padding: 1,
									marginLeft: 11
								}}
								key={i}
							>
								<a href={result.link} target="_blank">
									<p
										style={{
											color: this.props.textColor,
											fontSize: '1em',
											fontWeight: 300,
											lineHeight: 0,
											display: 'inline-block'
										}}
									>
										{result.name}
									</p>
									<FontIcon
										style={{
											color: this.props.textColor,
											fontSize: 14,
											display: 'inline-block',
											paddingLeft: 6,
											position: 'absolute',
											bottom: 10
										}}
										className="material-icons"
									>
										{result.icon}
									</FontIcon>
								</a>
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
