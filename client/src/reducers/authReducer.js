export default (state = null, action) => {
	// console.log(action);
	switch (action.type) {
		case 'fetchUser':
			return action.payload || false;
		case 'setAnonymous':
			return action.payload;
		default:
			return state;
	}
};
