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
		<div className="row">
			<Card
				className="col s8 m6 offset-s2 offset-m3"
				style={styles.loginCardStyle}
			>
				<div
					style={{
						...styles.loginCardContainerStyle
					}}
				>
					<div
						className="col m12 l4"
						style={{ paddingTop: 6, paddingLeft: 18 }}
					>
						<h4>Options</h4>
						<p style={{ paddingLeft: 3 }}>Language</p>
					</div>
					<div className="col s12 m12 l8">
						<form onSubmit={handleSubmit}>
							<div className="col s5 m5" style={{ paddingTop: '9%' }}>
								<Field name="language" component={renderRadioGroup}>
									<RadioButton
										value="chinese"
										label="中文"
										labelStyle={{ width: '100%' }}
									/>
									<RadioButton value="english" label="English" />
								</Field>
							</div>
							<div className="col s7 m7" style={{ paddingTop: '9%' }}>
								<div className="col s12 ">
									<RaisedButton
										type="submit"
										primary={true}
										fullWidth={true}
										style={buttonStyle}
										icon={
											<i className="material-icons">keyboard_arrow_right</i>
										}
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
							</div>
						</form>
					</div>
					<div>
						<CardActions className="col s12">
							<Field name="language" component={renderError} />
						</CardActions>
					</div>
				</div>
			</Card>
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
