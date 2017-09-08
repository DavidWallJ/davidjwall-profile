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

export const renderCheckbox = ({ input, label, color }) => {
	return (
		<div style={{ paddingTop: 12 }}>
			<Checkbox
				label={label}
				checked={input.value ? true : false}
				onCheck={input.onChange}
				iconStyle={{ fill: color, height: 28, width: 28 }}
				labelStyle={{
					color: color,
					minWidth: 110,
					fontSize: 18,
					lineHeight: '30px',
					fontWeight: 300
				}}
			/>
		</div>
	);
};
