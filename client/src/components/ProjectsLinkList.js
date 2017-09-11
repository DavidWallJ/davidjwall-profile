import React, { Component } from 'react';
import { connect } from 'react-redux';

// you are here.  you still need to add some of your graphql projects
class ProjectsLinkList extends Component {
	render() {
		const projects = [
			{
				name: 'This Website',
				technologies: [
					'react',
					'redux',
					'oauth',
					'axios',
					'express',
					'mongodb',
					'oauth',
					'passport',
					'heroku',
					'featured'
				],
				link: 'http://herokuexample.com',
				githubLink: 'https://github.com/DavidWallJ/davidjwall-profile'
			},
			{
				name: 'React & NodeJS Fullstack Feedback Collection App',
				technologies: [
					'react',
					'redux',
					'oauth',
					'axios',
					'stripe',
					'express',
					'mongodb',
					'passport',
					'heroku',
					'featured'
				],
				githubLink: 'https://github.com/DavidWallJ/udemy-node-react-fullstack'
			},
			{
				name: 'React Native Employee Manager App',
				technologies: ['reactnative', 'react', 'redux', 'firebase', 'featured'],
				githubLink: 'https://github.com/DavidWallJ/udemy-redux-native-manager'
			},
			{
				name: 'Music Albums App',
				technologies: ['reactnative', 'react', 'axios'],
				githubLink:
					'https://github.com/DavidWallJ/udemy-react-native-albums/blob/master/package.json'
			},
			{
				name: 'Simple Backend GraphQL App',
				technologies: [
					'javascript',
					'react',
					'redux',
					'axios',
					'express',
					'graphql'
				],
				githubLink:
					'https://github.com/DavidWallJ/udemy-adv-react-auth-clientside'
			},
			{
				name: 'React Fullstack Authentication Microservice (Frontend)',
				technologies: [
					'html',
					'css',
					'javascript',
					'react',
					'redux',
					'axios',
					'mocha',
					'chai'
				],
				githubLink:
					'https://github.com/DavidWallJ/udemy-adv-react-auth-clientside'
			},
			{
				name: 'React Fullstack Authentication Microservice (Backend)',
				technologies: [
					'html',
					'css',
					'javascript',
					'react',
					'redux',
					'axios',
					'mocha',
					'chai',
					'express',
					'mongodb'
				],
				githubLink:
					'https://github.com/DavidWallJ/udemy-adv-react-auth-pro/blob/master/server/index.js'
			},
			{
				name: 'React Weather App',
				technologies: [
					'html',
					'css',
					'javascript',
					'react',
					'redux',
					'axios',
					'mocha',
					'chai'
				],
				githubLink:
					'https://github.com/DavidWallJ/udemy-modern-react-with-redux-davidjwall/tree/master/weather'
			},
			{
				name: 'React/Redux Todo App',
				technologies: [
					'html',
					'css',
					'javascript',
					'react',
					'redux',
					'axios',
					'express',
					'firebase',
					'mocha'
				],
				link:
					'http://react-todo-app-davidjwall.herokuapp.com/#/todos?_k=0k3c1g',
				githubLink: 'https://github.com/DavidWallJ/react-todo-app'
			},
			{
				name: 'React Timer App',
				technologies: [
					'html',
					'css',
					'javascript',
					'react',
					'redux',
					'axios',
					'express',
					'mocha'
				],
				link:
					'http://react-timer-davidjwall.herokuapp.com/#/countdown?_k=7ksrzp',
				githubLink: 'https://github.com/DavidWallJ/react-timer'
			},
			{
				name: 'React Weather App',
				technologies: [
					'html',
					'css',
					'javascript',
					'react',
					'redux',
					'axios',
					'mocha',
					'chai'
				],
				link: 'http://openweathermap-react-api.herokuapp.com/#/?_k=upuizf',
				githubLink:
					'https://github.com/DavidWallJ/react-redux-graph-weather-api'
			},
			{
				name: 'Random Quote Generator',
				technologies: ['html', 'css', 'javascript', 'jquery'],
				link: 'https://codepen.io/DavidJWall/pen/Npvqjv'
			},
			{
				name: 'File Metadata Microservice',
				technologies: [
					'html',
					'css',
					'javascript',
					'nodejs',
					'express',
					'heroku',
					'jquery'
				],
				link: 'https://codepen.io/DavidJWall/pen/BRxgew'
			},
			{
				name: 'URL Shortener Microservice',
				technologies: [
					'html',
					'css',
					'javascript',
					'nodejs',
					'express',
					'heroku',
					'jquery',
					'mongodb'
				],
				link: 'https://codepen.io/DavidJWall/pen/MmOvQE'
			},
			{
				name: 'Request Header Parser Microservice',
				technologies: [
					'html',
					'css',
					'javascript',
					'nodejs',
					'express',
					'heroku',
					'jquery'
				],
				link: 'https://codepen.io/DavidJWall/pen/ZKyyEe'
			},
			{
				name: 'Timestamp Microservice',
				technologies: [
					'html',
					'css',
					'javascript',
					'nodejs',
					'express',
					'heroku',
					'jquery'
				],
				link: 'https://codepen.io/DavidJWall/pen/GmEgvm'
			},
			{
				name: 'Simon Game 2.0',
				technologies: ['html', 'css', 'javascript', 'jquery'],
				link: 'https://codepen.io/DavidJWall/pen/aWOmKd'
			},
			{
				name: 'Promodoro Clock',
				technologies: ['html', 'css', 'javascript', 'jquery'],
				link: 'https://codepen.io/DavidJWall/pen/YZbZEK'
			},
			{
				name: 'JavaScript Calculator',
				technologies: ['html', 'css', 'javascript', 'jquery'],
				link: 'https://codepen.io/DavidJWall/pen/BWbxBQ'
			},
			{
				name: 'Wiki Quicky',
				technologies: ['html', 'css', 'javascript', 'jquery'],
				link: 'https://codepen.io/DavidJWall/pen/oZELdK'
			},
			{
				name: 'Tic Tac Toe for Cheaters',
				technologies: ['html', 'css', 'javascript', 'jquery'],
				link: 'https://codepen.io/DavidJWall/pen/VbwNGQ?editors=1010'
			}
		];

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
								<li>
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
