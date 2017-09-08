import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderCheckbox } from './options/renderMaterialUIComponent';
import Checkbox from 'material-ui/Checkbox';

const styles = {
	block: {
		maxWidth: 250
	},
	checkbox: {
		marginBottom: 16
	}
};

const TechnologiesForm = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field name="react" component={renderCheckbox} label="React" />
			</div>
		</form>
	);
};

export default reduxForm({
	form: 'technologies'
})(TechnologiesForm);
