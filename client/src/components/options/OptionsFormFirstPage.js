import React from 'react';
import styles from '../componentsStyles';
import { Field, reduxForm } from 'redux-form';
import validate from './validateOptions';
import { Card, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton';
import { renderRadioGroup } from '../common/renderMaterialUIComponent';
import { renderError } from './RenderError';

const OptionsFormFirstPage = props => {
	const { handleSubmit } = props;

	const buttonStyle = {
		marginBottom: 5
	};

	return (
		<div className="row" style={styles.optionsContainerPadding}>
			<div className="col s12 m6 offset-m3" style={styles.loginCardStyle}>
				<div style={styles.loginCardContainerStyle}>
					<div className="col m12 l4">
						<h4>Options</h4>
						<p style={{ paddingLeft: 3 }}>Language</p>
					</div>
				</div>
			</div>
			{/* <Card className="col s12 m6 offset-m3" style={styles.loginCardStyle}>
				<div style={styles.loginCardContainerStyle}>
					<div className="col m12 l4">
						<h4>Options</h4>
						<p style={{ paddingLeft: 3 }}>Language</p>
					</div>
					<div className="col s12 m12 l8">
						<form onSubmit={handleSubmit}>
							<div className="col s5 m5" style={{ paddingTop: '9%' }}>
								<Field name="language" component={renderRadioGroup}>
									<RadioButton value="english" label="English" />
									<RadioButton
										value="chinese"
										label="中文"
										labelStyle={{ width: '100%' }}
										disabled={true}
									/>
								</Field>
							</div>
							<div className="col s7 m7" style={styles.optionsButtonStyle}>
								<RaisedButton
									type="submit"
									primary={true}
									fullWidth={true}
									style={buttonStyle}
									icon={<i className="material-icons">keyboard_arrow_right</i>}
								/>
								<RaisedButton
									href="/api/logout"
									type="button"
									secondary={true}
									fullWidth={true}
									style={buttonStyle}
									icon={<i className="material-icons">keyboard_arrow_left</i>}
								/>
							</div>
						</form>
					</div>

					<div>
						<CardActions className="col s12">
							<Field name="language" component={renderError} />
						</CardActions>
					</div>
				</div>
			</Card> */}
		</div>
	);
};
export default reduxForm({
	form: 'wizard', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	// initialValues: { theme: 'lightTheme' },
	validate
})(OptionsFormFirstPage);
