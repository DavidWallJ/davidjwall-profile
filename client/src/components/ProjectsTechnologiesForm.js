import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderCheckbox } from './common/renderMaterialUIComponent';

const technologies = [
	{ name: 'featured', label: 'Featured' },
	{ name: 'react', label: 'React' },
	{ name: 'reactnative', label: 'React Native' },
	{ name: 'redux', label: 'Redux' },
	{ name: 'vue', label: 'Vue' },
	{ name: 'jquery', label: 'jQuery' },
	{ name: 'javascript', label: 'JavaScript' },
	{ name: 'bootstrap', label: 'Bootstrap 4' },
	{ name: 'css', label: 'CSS' },
	{ name: 'html', label: 'HTML' },
	{ name: 'mongodb', label: 'MongoDB' },
	{ name: 'stripe', label: 'Stripe' },
	{ name: 'heroku', label: 'Heroku' },
	{ name: 'nodejs', label: 'NodeJS' },
	{ name: 'passport', label: 'Passport' },
	{ name: 'oauth', label: 'OAuth' },
	{ name: 'firebase', label: 'Firebase' },
	{ name: 'express', label: 'Express' },
	{ name: 'axios', label: 'Axios' },
	{ name: 'mocha', label: 'Mocha' },
	{ name: 'jest', label: 'Jest' }
];

const TechnologiesForm = props => {
	const { handleSubmit } = props;
	const technologyCount = technologies.length + 1;
	return (
		<form
			onSubmit={handleSubmit}
			style={{
				paddingBottom: 50
			}}
		>
			<div className="col s6">
				{technologies.slice(0, technologyCount / 2).map((technology, i) => {
					return (
						<Field
							key={i}
							name={technology.name}
							component={renderCheckbox}
							label={technology.label}
							color={props.textColor}
						/>
					);
				})}
			</div>
			<div className="col s6">
				{technologies
					.slice(technologyCount / 2, technologyCount)
					.map((technology, i) => {
						return (
							<Field
								key={i}
								name={technology.name}
								component={renderCheckbox}
								label={technology.label}
								color={props.textColor}
							/>
						);
					})}
			</div>
		</form>
	);
};

export default reduxForm({
	form: 'technologies'
})(TechnologiesForm);
