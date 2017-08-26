export default (state = 'lightTheme', action) => {
	// console.log(action);
	switch (action.type) {
		case 'setState':
			return action.payload;
		default:
			return state;
	}
};
