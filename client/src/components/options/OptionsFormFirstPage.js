import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import validate from './validate'
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton';
import { renderRadioGroup } from './RenderRadioGroup';

const OptionsFormFirstPage = props => {
	const { handleSubmit, previousPage } = props;
	const cardStyle = {
		marginTop: 12,
		paddingTop: 50,
		paddingBottom: 65
	};
	const buttonStyle = {
		marginBottom: 5
	};

	return (
		<div className="row">
			<Card className="col s8 m6 offset-s2 offset-m3" style={cardStyle}>
				<div className="col m16 l4">
					<CardTitle title="Options" subtitle="Theme" />
				</div>
				<div className="col m12 l8" style={{ paddingTop: 23 }}>
					<form onSubmit={handleSubmit}>
						<div className="col s5">
							<Field name="language" component={renderRadioGroup}>
								<RadioButton value="chinese" label="中文" />
								<RadioButton value="english" label="English" />
							</Field>
						</div>
						<div className="col s7 center-align">
							<div className="col s12 ">
								<RaisedButton
									type="submit"
									primary={true}
									fullWidth={true}
									style={buttonStyle}
									icon={<i className="material-icons">keyboard_arrow_right</i>}
								/>
							</div>
						</div>
					</form>
				</div>
			</Card>
		</div>
	);
};
export default reduxForm({
	form: 'wizard', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true // <------ unregister fields on unmount
	// validate
})(OptionsFormFirstPage);
