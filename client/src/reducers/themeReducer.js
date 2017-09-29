export default (state = 'lightTheme', action) => {
	switch (action.type) {
		case 'setTheme':
			return action.payload;
		default:
			return state;
	}
};
