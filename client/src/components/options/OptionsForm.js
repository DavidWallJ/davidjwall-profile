import './OptionsForm.css';
import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
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

		const cardStyle = {
			marginTop: 12,
			paddingTop: 50,
			paddingBottom: 65
		};

		return (
			<div className="row">
				<Card className="col s12 m6 offset-m3" style={cardStyle}>
					<div className="col s4">
						<CardTitle title="Options" subtitle="Theme" />
					</div>
					<div className="col s8" style={{ paddingTop: 23 }}>
						<form
							onSubmit={this.props.handleSubmit(values => console.log(values))}
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								alignItems: 'center',
								justifyContent: 'center',
								justifyContent: 'space-around'
							}}
						>
							<Field name="sex" component={renderRadioGroup}>
								<RadioButton value="darkTheme" label="Dark" />
								<RadioButton value="lightTheme" label="Light" />
							</Field>
							{/* <button type="submit">Submit</button> */}
							<RaisedButton type="submit" label="Submit" primary={true} />
						</form>
					</div>
				</Card>
			</div>
		);
	}
}

export default muiThemeable()(
	reduxForm({
		form: 'optionsForm'
	})(OptionsForm)
);
