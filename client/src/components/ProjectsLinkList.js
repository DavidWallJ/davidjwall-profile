import React, { Component } from 'react';
import { connect } from 'react-redux';
import projects from './projectsData';

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
			<div>
				<ul>
					{results.map((result, i) => {
						return (
							<a href={result.link} key={i}>
								<li
									style={{
										color: this.props.textColor,
										fontSize: 25,
										fontWeight: 400
									}}
								>
									{result.name}
								</li>
							</a>
						);
					})}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ form }) {
	return { form };
}

export default connect(mapStateToProps)(ProjectsLinkList);
