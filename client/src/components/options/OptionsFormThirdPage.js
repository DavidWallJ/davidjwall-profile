import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton';
import { renderRadioGroup } from './RenderRadioGroup';
import FontIcon from 'material-ui/FontIcon';

const OptionsFormThirdPage = props => {
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
					<CardTitle title="Options" subtitle="Music" />
				</div>
				<div className="col m12 l8" style={{ paddingTop: 23 }}>
					<form onSubmit={props.handleSubmit(values => console.log(values))}>
						<div className="col s5">
							<Field name="music" component={renderRadioGroup}>
								<RadioButton value="dance" label="Dance" />
								<RadioButton value="rock" label="Rock" />
								<RadioButton value="folk" label="Folk" />
								<RadioButton value="classical" label="Classical" />
								<RadioButton value="silence" label="Silence" />
							</Field>
							{/* <button type="submit">Submit</button> */}
						</div>
						<div className="col s7 center-align">
							<div className="col s12 ">
								<RaisedButton
									type="submit"
									primary={true}
									fullWidth={true}
									style={buttonStyle}
									icon={<i className="material-icons">done</i>}
								/>
								<RaisedButton
									type="button"
									secondary={true}
									fullWidth={true}
									onClick={previousPage}
									style={buttonStyle}
									icon={<i className="material-icons">keyboard_arrow_left</i>}
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
})(OptionsFormThirdPage);
