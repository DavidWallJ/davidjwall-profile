import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import themeReducer from './themeReducer';
import audioOptions from './audioReducer';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	muiTheme: themeReducer,
	audioOptions
});
