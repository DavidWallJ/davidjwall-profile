export default (state = { auth: null }, action) => {
	switch (action.type) {
		case 'setAnonymous':
			return action.payload;
		default:
			return state;
	}
};
