export default (state = { anonymous: false }, action) => {
	switch (action.type) {
		case 'setAnonymous':
			return action.payload;
		default:
			return state;
	}
};
