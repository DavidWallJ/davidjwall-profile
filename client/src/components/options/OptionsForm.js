import './OptionsForm.css';
import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { renderRadioGroup, renderCheckbox } from './RenderRadioGroup';

import { reduxForm, Field } from 'redux-form';

class OptionsForm extends Component {
	render() {
		const radioButtonStyles = {
			// fill: this.props.muiTheme.palette.alternateTextColor
		};
		const labelStyle = {
			// color: this.props.muiTheme.palette.alternateTextColor
		};
		return (
			<Card>
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					<Field name="sex" component={renderRadioGroup}>
						<RadioButton
							value="male"
							label="male"
							iconStyle={radioButtonStyles}
							labelStyle={labelStyle}
						/>
						<RadioButton
							value="female"
							label="female"
							iconStyle={radioButtonStyles}
							labelStyle={labelStyle}
						/>
					</Field>
					{/* <button type="submit">Submit</button> */}
					<FlatButton type="submit" label="Submit" primary={true} />
				</form>
			</Card>
		);
	}
}

export default muiThemeable()(
	reduxForm({
		form: 'optionsForm'
	})(OptionsForm)
);
