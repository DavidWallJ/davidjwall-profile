export default (state = {}, action) => {
	// console.log(action);
	switch (action.type) {
		case 'setAudio':
			return action.payload;
		default:
			return state;
	}
};
