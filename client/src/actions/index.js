import axios from 'axios';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: 'fetchUser', payload: res.data });
};

export const saveOptions = values => async dispatch => {
	// dispatch({ type: 'setTheme', payload: values.theme });
	await axios.post('/api/options', values);
	// await dispatch({ type: 'optionsTrue', payload: true });
	const res = await axios.get('/api/current_user');
	dispatch({ type: 'fetchUser', payload: res.data });
};

export const setTheme = theme => dispatch => {
	dispatch({ type: 'setTheme', payload: theme });
};

export const setAudio = audioOptions => dispatch => {
	dispatch({ type: 'setAudio', payload: audioOptions });
};

export const setAnonymous = user => dispatch => {
	dispatch({ type: 'setAnonymous', payload: user });
};
