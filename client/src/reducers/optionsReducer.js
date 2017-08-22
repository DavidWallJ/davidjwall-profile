export default (state = null, action) => {
	// console.log(action);
	switch (action.type) {
		case 'saveOptions':
			return action.payload || false;
		default:
			return state;
	}
};
