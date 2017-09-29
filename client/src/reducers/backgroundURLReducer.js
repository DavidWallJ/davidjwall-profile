export default (
	state = 'https://s3-ap-northeast-1.amazonaws.com/davidjwall-profileimages/maccomputer_darkened2.jpg',
	action
) => {
	switch (action.type) {
		case 'setBackgroundURL':
			return action.payload;
		default:
			return state;
	}
};
