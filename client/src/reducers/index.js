import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { audioReducer as audio } from 'redux-audio';
import authReducer from './authReducer';
import themeReducer from './themeReducer';
import audioOptions from './audioReducer';
import anonymousReducer from './anonymousReducer';

export default combineReducers({
	auth: authReducer,
	anonymous: anonymousReducer,
	form: reduxForm,
	muiTheme: themeReducer,
	audioOptions,
	audio
});
