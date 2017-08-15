import './OptionsForm.css';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import OptionsField from './OptionsField';

class OptionsForm extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					<Field type="radio" name="language" component={OptionsField} />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'optionsForm'
})(OptionsForm);
