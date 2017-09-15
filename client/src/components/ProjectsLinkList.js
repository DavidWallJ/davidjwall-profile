import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import projects from './projectsData';
import ShadowScrollbars from './ShadowScrollbars';

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
							<ListItem innerDivStyle={{ padding: 1, marginLeft: 11 }} key={i}>
								<a href={result.link}>
									<p
										style={{
											color: this.props.textColor,
											fontSize: 21,
											fontWeight: 300,
											lineHeight: 0
										}}
									>
										{result.name}
									</p>
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
