const validate = values => {
	const errors = {};
	if (!values.language) {
		errors.language = 'Please choose a language.';
	}

	if (!values.theme) {
		errors.theme = 'Please choose a theme.';
	}

	if (!values.genre) {
		errors.genre = 'Please choose a genre.';
	}

	return errors;
};

export default validate;
