export default (state = 'lightTheme', action) => {
	// console.log(action);
	switch (action.type) {
		case 'setTheme':
			return action.payload;
		default:
			return state;
	}
};
