import axios from 'axios';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: 'fetchUser', payload: res.data });
};

export const saveOptions = values => async dispatch => {
	const res = await axios.post('/api/options', values);
	dispatch({ type: 'saveOptions', payload: true });
};
