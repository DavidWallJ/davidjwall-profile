import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderCheckbox } from './common/renderMaterialUIComponent';
import Checkbox from 'material-ui/Checkbox';

const technologies = [
	{ name: 'react', label: 'React' },
	{ name: 'reactnative', label: 'React Native' },
	{ name: 'redux', label: 'Redux' },
	{ name: 'jquery', label: 'jQuery' },
	{ name: 'javascript', label: 'JavaScript' },
	{ name: 'css', label: 'CSS' },
	{ name: 'html', label: 'HTML' },
	{ name: 'mongodb', label: 'MongoDB' },
	{ name: 'heroku', label: 'Heroku' },
	{ name: 'nodejs', label: 'NodeJS' },
	{ name: 'passport', label: 'Passport' },
	{ name: 'oauth', label: 'OAuth' },
	{ name: 'firebase', label: 'Firebase' },
	{ name: 'express', label: 'Express' },
	{ name: 'axios', label: 'Axios' },
	{ name: 'mocha', label: 'Mocha' },
	{ name: 'featured', label: 'Featured' }
];

const TechnologiesForm = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<form
			onSubmit={handleSubmit}
			style={{
				paddingBottom: 50
				// display: 'flex'
				// flexDirection: 'column'
			}}
		>
			<div className="col s12 m6">
				{technologies.slice(0, 8).map((technology, i) => {
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
			<div className="col s12 m6">
				{technologies.slice(8, 17).map((technology, i) => {
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
