import React from 'react';

export const renderError = ({ meta: { touched, error } }) =>
	touched && error
		? <span className="red-text">
				{error}
			</span>
		: false;
