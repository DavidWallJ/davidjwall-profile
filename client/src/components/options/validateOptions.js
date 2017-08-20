import _ from 'lodash';
const validate = values => {
	const errors = {};
	const FIELDS = ['language', 'theme', 'genre'];
	_.forEach(FIELDS, field => {
		if (!values[field]) {
			errors[field] = `Please choose a ${field}`;
		}
	});

	return errors;
};

export default validate;
