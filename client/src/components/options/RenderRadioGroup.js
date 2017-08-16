import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';

export const renderRadioGroup = ({ input, ...rest }) =>
	<RadioButtonGroup
		{...input}
		{...rest}
		valueSelected={input.value}
		onChange={(event, value) => input.onChange(value)}
	/>;

export const renderCheckbox = ({ input, label }) =>
	<Checkbox
		label={label}
		checked={input.value ? true : false}
		onCheck={input.onChange}
	/>;
