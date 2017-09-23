import React from 'react';
import styles from '../componentsStyles';
import { Field, reduxForm } from 'redux-form';
import validate from './validateOptions';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton';
import { renderRadioGroup } from '../common/renderMaterialUIComponent';
import { renderError } from './RenderError';

const OptionsFormFirstPage = props => {
	const { handleSubmit, previousPage } = props;
	const cardStyle = {
		marginTop: 12,
		paddingTop: 40,
		minHeight: 240
	};
	const buttonStyle = {
		marginBottom: 5
	};

	return (
		<div className="row">
			<Card
				className="col s8 m6 offset-s2 offset-m3"
				style={styles.loginCardStyle}
			>
				<div className="col m12 l4">
					<CardTitle title="Options" subtitle="Music" />
				</div>
				<div className="col s12 m12 l8" style={{ paddingTop: 23 }}>
					<form onSubmit={handleSubmit}>
						<div className="col s12 m5" style={{ paddingBottom: 18 }}>
							<Field name="genre" component={renderRadioGroup}>
								<RadioButton value="dance" label="Dance" />
								<RadioButton value="rock" label="Rock" />
								<RadioButton value="hipHop" label="Hip Hop" />
								<RadioButton value="classical" label="Classical" />
								<RadioButton value="silence" label="Silence" />
							</Field>
							{/* <button type="submit">Submit</button> */}
						</div>
						<div className="col s12 m7 center-align">
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
									style={buttonStyle}
									icon={<i className="material-icons">keyboard_arrow_left</i>}
									onClick={previousPage}
								/>
							</div>
						</div>
					</form>
				</div>
				<div>
					<CardActions className="col s12 center-align">
						<Field name="genre" component={renderError} />
					</CardActions>
				</div>
			</Card>
		</div>
	);
};
export default reduxForm({
	form: 'wizard', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	validate
})(OptionsFormFirstPage);
