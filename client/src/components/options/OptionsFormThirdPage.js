import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import validate from './validate'
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton';
import { renderRadioGroup } from './RenderRadioGroup';

const OptionsFormThirdPage = props => {
	// const { handleSubmit } = props;
	const cardStyle = {
		marginTop: 12,
		paddingTop: 50,
		paddingBottom: 65
	};
	return (
		<div className="row">
			<Card className="col s12 m6 offset-m3" style={cardStyle}>
				<div className="col s4">
					<CardTitle title="Options" subtitle="Music" />
				</div>
				<div className="col s8" style={{ paddingTop: 23 }}>
					<form
						onSubmit={props.handleSubmit(values => console.log(values))}
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							alignItems: 'center',
							justifyContent: 'center',
							justifyContent: 'space-around'
						}}
					>
						<Field name="music" component={renderRadioGroup}>
							<RadioButton value="dance" label="Dance" />
							<RadioButton value="rock" label="Rock" />
							<RadioButton value="folk" label="Folk" />
							<RadioButton value="classical" label="classical" />
							<RadioButton value="silence" label="Silence" />
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
})(OptionsFormThirdPage);
