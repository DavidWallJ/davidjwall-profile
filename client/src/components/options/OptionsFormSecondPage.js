import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from '../componentsStyles';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Field, reduxForm } from 'redux-form';
import validate from './validateOptions';
import { Card, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton';
import { renderRadioGroup } from '../common/renderMaterialUIComponent';
import { renderError } from './RenderError';

const OptionsFormSecondPage = props => {
	const { handleSubmit } = props;
	return (
			<div className="login-form">
				<div className="form-container">
					<h2 className="form-container__title heading-1">
						Options <FontAwesome name="gear" />
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="radio-group">
							<Field name="theme" component={renderRadioGroup}>
								<RadioButton value="theme-light" label="Light" labelStyle={{ width: 50 }}/>
								<RadioButton value="theme-dark" label="Dark" />
							</Field>
						</div>
						<div className="buttons">
							<button type="submit" className="buttons__next">
								next
							</button>
							<button
								onClick={e => {
									e.preventDefault();
									window.location = "/api/logout";
								}}
								className="buttons__prev"
							>
								prev
							</button>
						</div>
					</form>
				</div>	
			</div>
		// <div className="row" style={styles.optionsContainerPadding}>
		// 	<div className="col s12 m6 offset-m3" style={styles.loginCardStyle}>
		// 		<div style={styles.loginCardContainerStyle}>
		// 			<div className="col m12 l4">
		// 				<h4>Options</h4>
		// 				<p style={{ paddingLeft: 3 }}>Theme</p>
		// 			</div>
		// 			<div className="col s12 m12 l8">
		// 				<form onSubmit={handleSubmit}>
		// 					<div className="col s5 m5" style={{ paddingTop: '9%' }}>
		// 						<Field name="theme" component={renderRadioGroup}>
		// 							<RadioButton value="lightTheme" label="Light" />
		// 							<RadioButton value="darkTheme" label="Dark" />
		// 						</Field>
		// 					</div>
		// 					<div className="col s7 m7" style={styles.optionsButtonStyle}>
		// 						<RaisedButton
		// 							type="submit"
		// 							primary={true}
		// 							fullWidth={true}
		// 							style={buttonStyle}
		// 							icon={<i className="material-icons">keyboard_arrow_right</i>}
		// 						/>
		// 						<RaisedButton
		// 							type="button"
		// 							secondary={true}
		// 							fullWidth={true}
		// 							onClick={previousPage}
		// 							style={buttonStyle}
		// 							icon={<i className="material-icons">keyboard_arrow_left</i>}
		// 						/>
		// 					</div>
		// 				</form>
		// 			</div>
		// 			<div>
		// 				<CardActions className="col s12 center-align">
		// 					<Field name="theme" component={renderError} />
		// 				</CardActions>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default reduxForm({
	form: 'wizard', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	validate
})(OptionsFormSecondPage);
