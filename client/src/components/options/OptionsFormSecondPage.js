import React from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Field, reduxForm } from 'redux-form';
import validate from './validateOptions';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton';
import { renderRadioGroup } from './renderMaterialUIComponent';
import { renderError } from './RenderError';

{
	renderError;
}

const OptionsFormSecondPage = props => {
	const { handleSubmit, previousPage } = props;
	const cardStyle = {
		marginTop: 12,
		paddingTop: 40,
		minHeight: 185
	};
	const buttonStyle = {
		marginBottom: 5
	};

	return (
		<div className="row">
			<Card className="col s8 m6 offset-s2 offset-m3" style={cardStyle}>
				<div className="col m12 l4">
					<CardTitle title="Options" subtitle="Theme" />
				</div>
				<div className="col s12 m12 l8" style={{ paddingTop: 23 }}>
					<form onSubmit={handleSubmit}>
						<div className="col s12 m5" style={{ paddingBottom: 18 }}>
							<Field name="theme" component={renderRadioGroup}>
								<RadioButton value="lightTheme" label="Light" />
								<RadioButton value="darkTheme" label="Dark" />
							</Field>
						</div>
						<div className="col s12 m7 center-align">
							<div className="col s12 ">
								<RaisedButton
									type="submit"
									primary={true}
									fullWidth={true}
									style={buttonStyle}
									icon={<i className="material-icons">keyboard_arrow_right</i>}
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
				<div>
					<CardActions className="col s12 center-align">
						<Field name="theme" component={renderError} />
					</CardActions>
				</div>
			</Card>
		</div>
	);
};

export default muiThemeable()(
	reduxForm({
		form: 'wizard', // <------ same form name
		destroyOnUnmount: false, // <------ preserve form data
		forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
		validate
	})(OptionsFormSecondPage)
);
