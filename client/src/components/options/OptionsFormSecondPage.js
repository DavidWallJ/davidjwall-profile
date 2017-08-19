import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import validate from './validate'
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton';
import { renderRadioGroup } from './RenderRadioGroup';

const OptionsFormSecondPage = props => {
	const { handleSubmit } = props;
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
						onSubmit={handleSubmit}
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							alignItems: 'center',
							justifyContent: 'center',
							justifyContent: 'space-around'
						}}
					>
						<Field name="theme" component={renderRadioGroup}>
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
};

export default reduxForm({
	form: 'wizard', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true // <------ unregister fields on unmount
	// validate
})(OptionsFormSecondPage);
