export default (state = 'theme-light', action) => {
	switch (action.type) {
		case 'setTheme':
			return action.payload.theme;
		default:
			return state;
	}
};
