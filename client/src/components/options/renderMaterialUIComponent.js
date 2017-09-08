import React from 'react';
import { RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';

export const renderRadioGroup = ({
	input,
	...rest,
	meta: { touched, error }
}) => {
	return (
		<RadioButtonGroup
			{...input}
			{...rest}
			valueSelected={input.value}
			onChange={(event, value) => input.onChange(value)}
		/>
	);
};

export const renderCheckbox = ({ input, label }) => {
	return (
		<div>
			<p>Checkbox rendering</p>
			<Checkbox
				label={label}
				checked={input.value ? true : false}
				onCheck={input.onChange}
			/>
		</div>
	);
};
